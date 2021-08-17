const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const express = require('express');

dayjs.extend(customParseFormat);

const app = express();
const port = 3001;
const returnDataUser123 = [
  {
    title: 'Trafikkvakt',
    time: dayjs('23.September 2022', 'DD.MMMM YYYY'),
    place: 'Øvre felt Nordstrandveien',
    assignment: 'Trafikkvakt'
  },
  {
    title: 'Julemarked',
    time: dayjs('1970-00-00', 'YYYY-MM-DD'),
    place: 'Cafeen',
    assignment: 'Godteboden'
  },
  {
    title: '17.mai',
    time: dayjs('17.Mai 2021', 'DD. MMMM YYYY'),
    place: 'Storskolen (113)',
    assignment: 'Lykkehjulet'
  }
];
const returnDataUser234 = [
  {
    title: 'Trafikkvakt',
    time: dayjs('05/02/69 1:02:03 PM -05:00', 'MM/DD/YY H:mm:ss A Z'),
    place: 'Solveien',
    assignment: 'Trafikkvakt'
  },
  {
    title: 'Dugnad',
    time: dayjs('2018 Enero 15', 'YYYY MMMM DD', 'es'),
    place: 'Småskolen (115)',
    assignment: 'Dugnad'
  }
];
const eventRes = (userId) => {
  switch (userId) {
    case '104135659029594636830':
      return returnDataUser123;
    case '104258163563359462559':
      return returnDataUser234;
    default:
      return [];
  }
};

const userData1 = {
  name: 'Johannes Knowit'
};
const userData2 = {
  name: 'Johannes Knowit'
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
/* app.route('/event').get((req, res, next) => {
  res.json({});
}); */

app.get('/event/:userId', (req, res) => {
  return res.json(eventRes(req.params.userId));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
