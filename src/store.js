const STORE = {
  contacts: {},
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
