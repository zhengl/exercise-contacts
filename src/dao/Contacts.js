import url from 'url';
import fetch from 'isomorphic-fetch';

const isClient = typeof window !== 'undefined';

const BASE_URL = {
  protocol: isClient ? (process.env.CLIENT_PROTOCOL || 'http') : 'http',
  hostname: isClient ? (process.env.CLIENT_HOST || 'localhost') : 'localhost',
  port: isClient ? (process.env.CLIENT_PORT || 3000) : (process.env.PORT || 3000),
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
