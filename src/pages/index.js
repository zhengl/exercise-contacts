import { arrayOf, object } from 'prop-types';
import fetch from 'isomorphic-fetch';
import Contacts from '../components/Contacts';

const App = ({ contacts }) => (
  <div>
    <Contacts contacts={contacts} />
  </div>
);

App.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/contacts');
  const contacts = await res.json();
  return { contacts };
};

App.propTypes = {
  contacts: arrayOf(object).isRequired,
};

export default App;
