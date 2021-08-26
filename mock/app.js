const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const express = require('express');
const userData = require('./userData.json');
const eventData = require('./eventData.json');

dayjs.extend(customParseFormat);

const app = express();
const port = 3001;

/// /// user /// ///
const getUserData = (userId) => userData.find((user) => user.id === userId);

app
  .route('/user')
  .get((req, res, next) => {
    const { userId } = req.query;

    return res.send(getUserData(userId));
  })
  .post((req, res, next) => {
    return res.send(getUserData(req.params.userId));
  });

/// /// event /// ///
const findEvent = (current, eventId) => {
  let result;
  if (current.id === eventId) {
    return current;
  }
  if (
    typeof current !== 'string' &&
    typeof current !== 'number' &&
    !(current instanceof Array)
  ) {
    const valuesArr = Object.values(current);
    for (let i = 0; i < valuesArr.length; i += 1) {
      const returnValue = findEvent(valuesArr[i], eventId);
      if (returnValue && returnValue.id === eventId) {
        result = returnValue;
        break;
      }
    }
    return result;
  }
  if (typeof current !== 'string' && current instanceof Array) {
    for (let i = 0; i < current.length; i += 1) {
      const returnValue = findEvent(current[i], eventId);
      if (returnValue && returnValue.id === eventId) {
        result = returnValue;
        break;
      }
    }
    return result;
  }
  return result;
};

const getEvent = (eventId) => {
  return findEvent(eventData, eventId);
};

const getEventIdFromWorkShiftId = (workShiftId) => workShiftId.charAt(0);
const getTaskIdFromWorkShiftId = (workShiftId) => workShiftId.charAt(1);

const getTypeAndTaskTitle = (workShiftId) => {
  const eventTypeFromWorkShiftId = eventData.find(
    (event) => event.id === getEventIdFromWorkShiftId(workShiftId)
  ).type;
  const taskId =
    getEventIdFromWorkShiftId(workShiftId) +
    getTaskIdFromWorkShiftId(workShiftId);
  const taskTitleFromWorkShiftId = findEvent(eventData, taskId);
  const task = taskTitleFromWorkShiftId && taskTitleFromWorkShiftId.task;
  return {
    type: eventTypeFromWorkShiftId,
    task
  };
};

const findAllWorkShiftsForUser = (current, userId) => {
  const result = [];
  if (current && current.users && current.users instanceof Array) {
    const isFound = current.users.some((elem) => elem === userId);
    if (isFound) {
      return current;
    }
    return false;
  }
  if (
    current &&
    typeof current !== 'string' &&
    typeof current !== 'number' &&
    !(current instanceof Array)
  ) {
    const valuesArr = Object.values(current);
    for (let i = 0; i < valuesArr.length; i += 1) {
      const returned = findAllWorkShiftsForUser(valuesArr[i], userId);
      if (returned instanceof Array) {
        returned.forEach((elem) => {
          result.push(elem);
        });
      }
    }
    return result;
  }
  if (typeof current !== 'string' && current instanceof Array) {
    for (let i = 0; i < current.length; i += 1) {
      const returned = findAllWorkShiftsForUser(current[i], userId);
      if (returned instanceof Array) {
        returned.forEach((elem) => result.push(elem));
      } else if (returned) {
        result.push(returned);
      }
    }
    return result;
  }
  return result.length < 0 ? result : false;
};

const getAllEventsForUser = (userId) => {
  return findAllWorkShiftsForUser(eventData, userId);
};

const getEventForUser = (userId, eventId, quantity) => {
  if (quantity) {
    // 1. sjekk userId for adminrettigheter
    // 2. hent event og antall, foreløpig alle
    return getEvent(eventId);
  }
  if (eventId) {
    // 1. hent prev, current og next team for userId
    const result = getEvent(eventId);
    return {
      ...getTypeAndTaskTitle(eventId),
      ...result
    };
  }

  // 1. hent alle eventer for userId
  const result = getAllEventsForUser(userId);
  return result.map((workShift) => {
    const typeAndTitle = getTypeAndTaskTitle(workShift.id);
    return {
      ...typeAndTitle,
      ...workShift
    };
  });
};

const userIdTransformation = (userId) => {
  switch (userId) {
    case '104135659029594636830':
      return 1;
    case '104258163563359462559':
      return 2;
    case '':
      return 3;
    default:
      return 4;
  }
};

const getEventsByType = (eventType) => {
  return eventData.find(
    (event) => event.type.toLowerCase() === eventType.toLowerCase()
  );
};
const getAllTasksForUserByEventType = (userId, eventType) => {
  const eventsByType = getEventsByType(eventType);
  return findAllWorkShiftsForUser(eventsByType, userId);
};

app.get('/event/:userId', (req, res) => {
  const result = getEventForUser(userIdTransformation(req.params.userId));
  return res.json(result);
});

/* app.get('/event/:userId/:eventId', (req, res) => {
  const result = getEventForUser(req.params.userId, req.params.eventId);
  return res.json(result);
}); */

app.get('/event/:userId/:taskName', (req, res) => {
  const result = getAllTasksForUserByEventType(
    userIdTransformation(req.params.userId),
    req.params.taskName
  );
  return res.json(result);
});

app.get('/event/:userId/:eventId/:quantity', (req, res, next) => {
  return res.json(
    getEventForUser(req.params.userId, req.params.eventId, req.params.quantity)
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
