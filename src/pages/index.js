import { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import { fetchContacts } from '../dao/Contacts';
import {
  addContacts,
  getContacts,
  clearContactIds,
} from '../store';
import Layout from '../components/Layout';
import Search from '../components/Search';
import SortableHeader from '../components/SortableHeader';
import Contacts from '../components/Contacts';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 10;

class List extends Component {
  constructor(props) {
    super(props);
    addContacts(props.contacts, 0);
    this.state = {
      offset: 0,
      query: '',
      column: null,
      order: null,
    };
  }

  onTurn = updateOffset => async () => {
    const {
      offset, query, column, order,
    } = this.state;
    const newOffset = updateOffset(offset);
    const options = {
      offset: newOffset,
      limit: PAGE_SIZE,
    };
    if (query) {
      options.q = query;
    }
    if (order) {
      options[order] = column;
    }
    const contacts = await fetchContacts(options);
    addContacts(contacts, newOffset);
    this.setState({
      offset: newOffset,
    });
  }

  onPrevious = this.onTurn(offset => offset - PAGE_SIZE)

  onNext = this.onTurn(offset => offset + PAGE_SIZE)

  onQueryChange = (query) => {
    if (query === '') {
      clearContactIds();
      this.setState({
        query,
      });
    } else {
      if (query !== this.state.query) {
        clearContactIds();
      }
      this.setState({
        query,
      });
      this.search(query);
    }
  }

  onSort = async ({ column, order }) => {
    const contacts = await fetchContacts({
      limit: PAGE_SIZE,
      [order]: column,
    });
    addContacts(contacts, 0);
    this.setState({
      offset: 0,
      order,
      column,
    });
  }

  search = async (query) => {
    const contacts = await fetchContacts({
      limit: PAGE_SIZE,
      q: query,
    });
    addContacts(contacts, 0);
    this.setState({
      offset: 0,
    });
  }

  render() {
    const { offset, query } = this.state;
    const contacts = getContacts();
    const slicedContacts = contacts
      .slice(offset, offset + PAGE_SIZE);

    return (
      <Layout>
        <Search query={query} onQueryChange={this.onQueryChange} />
        <SortableHeader onSort={this.onSort} />
        <Contacts contacts={slicedContacts} />
        <Pagination onPrevious={this.onPrevious} onNext={this.onNext} />
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
