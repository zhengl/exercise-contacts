import { arrayOf, object, func } from 'prop-types';
import styled from 'styled-components';
import Contact from '../Contact';
import Pagination from '../Pagination';

const Wrapper = styled.div``;

export const Header = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  font-size: 16px;
  border-bottom: 1px solid rgb(224, 224, 224);
`;

const Label = styled.span`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.54);
  flex: 1;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Contacts = ({ contacts, onPrevious, onNext }) => (
  <Wrapper>
    <Header>
      <Label>Name</Label>
      <Label>Title</Label>
      <Label>Age</Label>
      <Label>Count</Label>
      <Label>Favorite</Label>
    </Header>
    <List>
      { contacts.map(contact => <Contact key={contact.id} {...contact} />) }
    </List>
    <Footer>
      <Pagination onPrevious={onPrevious} onNext={onNext} />
    </Footer>
  </Wrapper>
);

Contacts.propTypes = {
  contacts: arrayOf(object).isRequired,
  onPrevious: func.isRequired,
  onNext: func.isRequired,
};

export default Contacts;
