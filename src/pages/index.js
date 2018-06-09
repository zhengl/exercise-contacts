import { Component } from 'react';
import styled from 'styled-components';
import { arrayOf, object } from 'prop-types';
import fetchContacts from '../dao/Contacts';
import AppBar from '../components/AppBar';
import Contacts from '../components/Contacts';

const PAGE_SIZE = 10;

const Wrapper = styled.div`
  padding-top: 72px;
`;

const Main = styled.div`
  max-width: 960px;
  margin: 0 auto;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, .2);
`;

const addContacts = (contacts, newContacts) => {
  const existingContacts = { ...contacts };
  newContacts.forEach((contact) => {
    existingContacts[contact.id] = contact;
  });

  return existingContacts;
};

class App extends Component {
  state = {
    offset: 0,
    contacts: addContacts({}, this.props.contacts),
  }

  onPrevious = async () => {
    const { offset } = this.state;
    const newOffset = offset - PAGE_SIZE;
    const contacts = await fetchContacts({
      offset: newOffset,
      limit: PAGE_SIZE,
    });

    this.setState({
      contacts: addContacts(this.state.contacts, contacts),
      offset: newOffset,
    });
  }

  onNext = async () => {
    const { offset } = this.state;
    const newOffset = offset + PAGE_SIZE;
    const contacts = await fetchContacts({
      offset: newOffset,
      limit: PAGE_SIZE,
    });

    this.setState({
      contacts: addContacts(this.state.contacts, contacts),
      offset: newOffset,
    });
  }

  render() {
    const { offset, contacts } = this.state;
    const slicedContacts = Object.keys(contacts)
      .slice(offset, offset + PAGE_SIZE)
      .map(id => contacts[id]);

    return (
      <Wrapper>
        <AppBar title="Contacts" />
        <Main>
          <Contacts contacts={slicedContacts} onPrevious={this.onPrevious} onNext={this.onNext} />
        </Main>
      </Wrapper>
    );
  }
}

App.getInitialProps = async () => {
  const contacts = await fetchContacts({
    limit: PAGE_SIZE,
  });
  return { contacts };
};

App.propTypes = {
  contacts: arrayOf(object).isRequired,
};

export default App;
