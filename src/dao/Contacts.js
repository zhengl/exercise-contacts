import url from 'url';
import fetch from 'isomorphic-fetch';

const BASE_URL = {
  protocol: 'http',
  hostname: 'localhost',
  port: 3000,
};

export async function fetchContacts(options) {
  const apiUrl = url.format({
    ...BASE_URL,
    pathname: '/api/contacts',
    query: options,
  });

  const result = await fetch(apiUrl);

  return result.json();
}

export async function fetchDetails(id) {
  const apiUrl = url.format({
    ...BASE_URL,
    pathname: `/api/contacts/${id}`,
  });

  const result = await fetch(apiUrl);

  return result.json();
}
