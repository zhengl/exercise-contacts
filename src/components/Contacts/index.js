import { arrayOf, object } from 'prop-types';
import Contact from '../Contact';

const Contacts = ({ contacts }) => (
  <ul className="contacts">
    { contacts.map(contact => <Contact key={contact.id} {...contact} />) }
  </ul>
);

Contacts.propTypes = {
  contacts: arrayOf(object).isRequired,
};

export default Contacts;
