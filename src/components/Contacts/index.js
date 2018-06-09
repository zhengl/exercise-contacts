import { arrayOf, object } from 'prop-types';
import styled from 'styled-components';
import Contact from '../Contact';

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Contacts = ({ contacts }) => (
  <Wrapper>
    { contacts.map(contact => <Contact key={contact.id} {...contact} />) }
  </Wrapper>
);

Contacts.propTypes = {
  contacts: arrayOf(object).isRequired,
};

export default Contacts;
