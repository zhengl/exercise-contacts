const { query } = require('../db');

async function list(options) {
  const sql = `
SELECT l.UserID as id, l.Title as title, l.Name as name, l.BirthDate as birthDate, COUNT(*) AS count, l.IsFavorite as isFavorite
FROM Contact as l
LEFT JOIN ContactDetail as d on d.UserID = l.UserID
GROUP BY l.UserID
LIMIT ? OFFSET ?;
`;

  const { limit, offset } = options;
  return query(sql, [limit, offset]);
}

async function get(id) {
  const sql = 'SELECT * FROM ContactDetail WHERE UserID = ?';

  const rows = await query(sql, [id]);
  const result = {};
  rows.forEach(({ ContactDetailType, ContactDetailContent }) => {
    const type = ContactDetailType.toLowerCase();
    const content = ContactDetailContent;
    if (result[type] === undefined) {
      result[type] = [];
    }

    result[type].push(content);
  });

  return result;
}

module.exports = {
  list,
  get,
};
