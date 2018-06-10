import { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import { fetchContacts } from '../dao/Contacts';
import { addContacts, getContacts } from '../store';
import Layout from '../components/Layout';
import Contacts from '../components/Contacts';

const PAGE_SIZE = 10;

class List extends Component {
  constructor(props) {
    super(props);
    addContacts(props.contacts);
    this.state = {
      offset: 0,
    };
  }

  onPrevious = async () => {
    const { offset } = this.state;
    const newOffset = offset - PAGE_SIZE;
    const contacts = await fetchContacts({
      offset: newOffset,
      limit: PAGE_SIZE,
    });
    addContacts(contacts);
    this.setState({
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
    addContacts(contacts);
    this.setState({
      offset: newOffset,
    });
  }

  render() {
    const contacts = getContacts();
    const { offset } = this.state;
    const slicedContacts = Object.keys(contacts)
      .slice(offset, offset + PAGE_SIZE)
      .map(id => contacts[id]);

    return (
      <Layout>
        <Contacts contacts={slicedContacts} onPrevious={this.onPrevious} onNext={this.onNext} />
      </Layout>
    );
  }
}

List.getInitialProps = async () => {
  const contacts = await fetchContacts({
    limit: PAGE_SIZE,
  });
  return { contacts };
};

List.propTypes = {
  contacts: arrayOf(object).isRequired,
};

export default List;
