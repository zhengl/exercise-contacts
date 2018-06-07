const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');

const app = next({ dev });
const handle = app.getRequestHandler();

const apiRoutes = require('./api');

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use('/api', apiRoutes);

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Contacts app listening on port ${PORT}!`); // eslint-disable-line no-console
  });
});
