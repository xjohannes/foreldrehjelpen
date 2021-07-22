// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Foreldrehjelpen!');
});

app.get('/event:userId', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
