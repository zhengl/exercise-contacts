const { query } = require('../db');

async function list(options) {
  const sql = 'SELECT * FROM Contact LIMIT ? OFFSET ?';

  const { limit, offset } = options;
  const rows = await query(sql, [limit, offset]);
  return rows.map(({
    UserID, Title, Name, BirthDate, IsFavorite,
  }) => ({
    id: UserID,
    title: Title,
    name: Name,
    birthDate: BirthDate,
    isFavorite: IsFavorite,
  }));
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
    if (!result[type].includes(content)) {
      result[type].push(content);
    }
  });

  return result;
}

module.exports = {
  list,
  get,
};
