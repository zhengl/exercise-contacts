const { query, escapeId } = require('../db');

async function list(options) {
  const {
    limit, offset, q, asc, desc,
  } = options;
  const baseSql = `
SELECT l.UserID as id, l.Title as title, l.Name as name, l.BirthDate as birthDate, COUNT(*) AS count, l.IsFavorite as isFavorite
FROM Contact as l
LEFT JOIN ContactDetail as d ON d.UserID = l.UserID
${q ? 'WHERE l.Name LIKE ?' : ''}
GROUP BY l.UserID
${asc ? `ORDER BY ${escapeId(asc)} ASC` : ''}
${desc ? `ORDER BY ${escapeId(desc)} DESC` : ''}
`;
  const totalSql = `
SELECT COUNT(*) AS total FROM (${baseSql}) AS Total;
`;
  const sql = `
${baseSql} LIMIT ? OFFSET ?;
`;
  const params = [limit, offset];
  if (q) {
    params.unshift(`%${q}%`);
  }

  const [total, data] = await Promise.all([
    query(totalSql, params),
    query(sql, params),
  ]);

  return { total: total[0].total, data };
}

async function get(id) {
  const sql = `
SELECT l.UserID as id, l.Title as title, l.Name as name, l.BirthDate as birthDate, l.IsFavorite as isFavorite, d.ContactDetailType as type, d.ContactDetailContent as content
FROM Contact as l
LEFT JOIN ContactDetail as d ON d.UserID = l.UserID
WHERE l.UserID = ?;
`;

  const rows = await query(sql, [id]);

  if (!rows.length) {
    return {};
  }

  const result = { ...rows[0], types: {} };
  delete result.type;
  delete result.content;
  rows.forEach(({ type, content }) => {
    const normalizedType = type.toLowerCase();
    if (!result.types[normalizedType]) {
      result.types[normalizedType] = [];
    }

    result.types[normalizedType].push(content);
  });

  return result;
}

module.exports = {
  list,
  get,
};
