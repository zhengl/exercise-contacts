const STORE = {
  contacts: {},
  ids: [],
};

function setContactIds(ids, offset) {
  ids.forEach((id, index) => {
    STORE.ids[offset + index] = id;
  });
}

export function addContacts(contacts, offset) {
  contacts.forEach((contact) => {
    STORE.contacts[contact.id] = contact;
  });
  setContactIds(contacts.map(({ id }) => id), offset);
}

export function getContacts() {
  return STORE.ids.map(id => STORE.contacts[id]);
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

export function clearContactIds() {
  STORE.ids = [];
}
