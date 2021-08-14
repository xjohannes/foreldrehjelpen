// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

const app = express();
const port = 3001;
const returnDataUser123 = {
  tid: new Date(),
  sted: 'Krysset mellom skolene',
  vakt: 'Trafikkvakt'
};
const returnDataUser234 = {
  tid: new Date(),
  sted: 'Krysset mellom skolene',
  vakt: 'Trafikkvakt'
};
const eventRes = (userId) => {
  switch (userId) {
    case 123:
      return returnDataUser123;
    case 234:
      return returnDataUser234;
    default:
      return {};
  }
};

app
  .route('/user')
  .get((req, res, next) => {
    console.log('REQUEST USER', req.params);
    return res.json({
      name: 'Jane Doe',
      userId: '123'
    });
  })
  .post((req, res, next) => {
    return res.send({});
  });
/* app.route('/event').get((req, res, next) => {
  res.json({});
}); */

app.get('/event/:userId', (req, res) => {
  res.json(eventRes(req.params.userId));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
