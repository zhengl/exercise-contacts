import styled from 'styled-components';
import { arrayOf, object } from 'prop-types';
import fetch from 'isomorphic-fetch';
import AppBar from '../components/AppBar';
import Contacts from '../components/Contacts';

const Wrapper = styled.div``;

const App = ({ contacts }) => (
  <Wrapper>
    <AppBar />
    <Contacts contacts={contacts} />
  </Wrapper>
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
