import url from 'url';
import fetch from 'isomorphic-fetch';

export default async function fetchContacts(options) {
  const apiUrl = url.format({
    protocol: 'http',
    hostname: 'localhost',
    port: 3000,
    pathname: '/api/contacts',
    query: options,
  });

  const result = await fetch(apiUrl);

  return result.json();
}
