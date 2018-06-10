const STORE = {
  contacts: {},
  filterIds: [],
};

export function addContacts(contacts) {
  contacts.forEach((contact) => {
    STORE.contacts[contact.id] = contact;
  });
}

export function getContacts() {
  return STORE.contacts;
}

export function addDetails(id, details) {
  if (!STORE.contacts[id]) {
    STORE.contacts[id] = details;
  } else {
    STORE.contacts[id] = {
      ...STORE.contacts[id],
      ...details,
    };
  }
}

export function getDetails(id) {
  return STORE.contacts[id];
}

export function setFilteredContactIds(ids, offset) {
  ids.forEach((id, index) => {
    STORE.filterIds[offset + index] = id;
  });
}

export function clearFilteredContactIds() {
  STORE.filterIds = [];
}

export function getFilteredContacts() {
  const result = {};
  STORE.filterIds.forEach((id) => {
    result[id] = STORE.contacts[id];
  });

  return result;
}
