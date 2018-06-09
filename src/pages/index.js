import styled from 'styled-components';
import { arrayOf, object } from 'prop-types';
import fetch from 'isomorphic-fetch';
import AppBar from '../components/AppBar';
import Contacts from '../components/Contacts';

const Wrapper = styled.div`
  padding-top: 72px;
`;

const Main = styled.div`
  max-width: 960px;
  margin: 0 auto;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, .2);
`;

const App = ({ contacts }) => (
  <Wrapper>
    <AppBar title="Contacts" />
    <Main>
      <Contacts contacts={contacts} />
    </Main>
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
