const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const express = require('express');
const userData = require('./userData.json');

dayjs.extend(customParseFormat);

const app = express();
const port = 3001;

/// /// user /// ///
const userData1 = {
  name: 'Johannes Knowit',
  phone: '92080690'
};
const userData2 = {
  name: 'Johannes Privat'
};

const getUserData = (userId) => {
  switch (userId) {
    case '104135659029594636830':
      return userData1;
    case '104258163563359462559':
      return userData2;
    default:
      return {
        name: 'Jane Doe',
        userId: '123',
        picture: 'No picture from server'
      };
  }
};

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

const eventRes = (userId, eventId, quantity) => {
  if (quantity) {
    // 1. sjekk userId for adminrettigheter
    // 2. hent event og antall
    return null;
  }
  if (eventId) {
    // 1. hent prev, current og next team for userId
    return null;
  }
  // 1. hent alle eventer for userId
  switch (userId) {
    case '104135659029594636830':
      return userData.user123;
    case '104258163563359462559':
      return userData.user234;
    default:
      return [];
  }
};

app.get('/event/:userId', (req, res) => {
  return res.json(eventRes(req.params.userId));
});

app.get('/event/:userId/:eventId', (req, res) => {
  return res.json(eventRes(req.params.userId, req.params.eventId));
});

app.get('/event/:userId/:eventId/:quantity', (req, res, next) => {
  return res.json(
    eventRes(req.params.userId, req.params.eventId, req.params.quantity)
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
