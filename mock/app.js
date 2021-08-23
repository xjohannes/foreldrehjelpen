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
    return res.send({});
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

const addResult = (returned, result) => {
  if (returned instanceof Array) {
    returned.forEach((elem) => result.push(elem));
  } else if (returned) {
    result.push(returned);
  }
  return result;
};

const findAllWorkShiftsForUser = (current, userId) => {
  const result = [];
  if (current.users && current.users instanceof Array) {
    const isFound = current.users.some((elem) => elem === userId);
    if (isFound) {
      return current;
    }
    return false;
  }
  if (
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
  console.log('GET event for userId', userId);
  if (quantity) {
    // 1. sjekk userId for adminrettigheter
    // 2. hent event og antall, foreløpig alle
    console.log('Quantity, GETTING EVENTS FOR ', userId);
    return getEvent(eventId);
  }
  if (eventId) {
    console.log('Event, GETTING EVENTS FOR ', userId);
    // 1. hent prev, current og next team for userId
    const result = getEvent(eventId);
    console.log('All events for user', result);
    return result;
  }

  // 1. hent alle eventer for userId
  const result = getAllEventsForUser(userId);
  console.log('RESULT', result);
  return result;
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

app.get('/event/:userId', (req, res) => {
  const result = getEventForUser(userIdTransformation(req.params.userId));
  return res.json(result);
});

app.get('/event/:userId/:eventId', (req, res) => {
  console.log('GET event for user userId, eventId');
  const result = getEventForUser(req.params.userId, req.params.eventId);
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
