const express = require('express');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');

const app = next({ dir: __dirname, dev });
const handle = app.getRequestHandler();

const apiRoutes = require('./api');

const PORT = process.env.PORT || 3000;

let httpServer;

app.prepare().then(() => {
  const server = express();

  server.use(cors());

  server.use('/api', apiRoutes);

  server.get('*', (req, res) => handle(req, res));

  httpServer = server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Contacts app listening on port ${PORT}!`); // eslint-disable-line no-console
  });
});

module.exports = {
  close: () => httpServer.close(),
};

