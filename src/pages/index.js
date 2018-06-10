import { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import { fetchContacts } from '../dao/Contacts';
import {
  addContacts,
  getContacts,
  setFilteredContactIds,
  clearFilteredContactIds,
  getFilteredContacts,
} from '../store';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Contacts from '../components/Contacts';

const PAGE_SIZE = 10;

class List extends Component {
  constructor(props) {
    super(props);
    addContacts(props.contacts);
    this.state = {
      offset: 0,
      query: '',
      isSearching: false,
    };
  }

  onTurn = updateOffset => async () => {
    const { offset, query, isSearching } = this.state;
    const newOffset = updateOffset(offset);
    const contacts = await fetchContacts({
      offset: newOffset,
      limit: PAGE_SIZE,
      q: query,
    });
    addContacts(contacts);
    if (isSearching) {
      setFilteredContactIds(contacts.map(({ id }) => id), newOffset);
    }
    this.setState({
      offset: newOffset,
    });
  }

  onPrevious = this.onTurn(offset => offset - PAGE_SIZE)

  onNext = this.onTurn(offset => offset + PAGE_SIZE)

  onQueryChange = (query) => {
    if (query === '') {
      clearFilteredContactIds();
      this.setState({
        query,
        isSearching: false,
      });
    } else {
      if (query !== this.state.query) {
        clearFilteredContactIds();
      }
      this.setState({
        query,
        isSearching: true,
      });
      this.search(query);
    }
  }

  search = async (query) => {
    const contacts = await fetchContacts({
      limit: PAGE_SIZE,
      q: query,
    });
    addContacts(contacts);
    setFilteredContactIds(contacts.map(({ id }) => id), 0);
    this.setState({
      offset: 0,
    });
  }

  render() {
    const { offset, query, isSearching } = this.state;
    const contacts = isSearching ? getFilteredContacts() : getContacts();
    const slicedContacts = Object.keys(contacts)
      .slice(offset, offset + PAGE_SIZE)
      .map(id => contacts[id]);

    return (
      <Layout>
        <Search query={query} onQueryChange={this.onQueryChange} />
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
