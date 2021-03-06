const express = require('express');

const router = express.Router();
const Contact = require('./Contact');

router.get('/contacts', async (req, res) => {
  const {
    limit, offset, q, asc, desc,
  } = req.query;

  const contacts = await Contact.list({
    limit: parseInt(limit, 10) || 10,
    offset: parseInt(offset, 10) || 0,
    q,
    asc,
    desc,
  });

  res.json(contacts);
});

router.get('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  const details = await Contact.get(id);

  res.json(details);
});

module.exports = router;
