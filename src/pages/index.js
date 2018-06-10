import { Component } from 'react';
import { arrayOf, object, number } from 'prop-types';
import debounce from 'lodash.debounce';
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
      total: props.total,
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
    const { total, data } = await fetchContacts(options);
    addContacts(data, newOffset);
    this.setState({
      offset: newOffset,
      total,
    });
  }

  onPrevious = this.onTurn(offset => offset - PAGE_SIZE)

  onNext = this.onTurn(offset => offset + PAGE_SIZE)

  onQueryChange = async (query) => {
    if (query === '') {
      clearContactIds();
      const { total, data } = await fetchContacts({
        limit: PAGE_SIZE,
      });
      addContacts(data, 0);
      this.setState({
        query,
        offset: 0,
        total,
      });
    } else {
      if (query !== this.state.query) {
        clearContactIds();
      }
      this.setState({
        query,
        offset: 0,
      });
      this.search(query);
    }
  }

  onSort = async ({ column, order }) => {
    const { total, data } = await fetchContacts({
      limit: PAGE_SIZE,
      [order]: column,
    });
    addContacts(data, 0);
    this.setState({
      offset: 0,
      order,
      column,
      total,
    });
  }

  search = debounce(async (query) => {
    const { total, data } = await fetchContacts({
      limit: PAGE_SIZE,
      q: query,
    });
    addContacts(data, 0);
    this.setState({
      offset: 0,
      total,
    });
  }, 300)

  render() {
    const { offset, query, total } = this.state;
    const contacts = getContacts();
    const slicedContacts = contacts
      .slice(offset, offset + PAGE_SIZE);

    return (
      <Layout>
        <Search query={query} onQueryChange={this.onQueryChange} />
        <SortableHeader onSort={this.onSort} />
        <Contacts contacts={slicedContacts} />
        <Pagination
          start={offset}
          end={offset + slicedContacts.length}
          total={total}
          onPrevious={this.onPrevious}
          onNext={this.onNext}
        />
      </Layout>
    );
  }
}

List.getInitialProps = async () => {
  const { total, data } = await fetchContacts({
    limit: PAGE_SIZE,
  });
  return { contacts: data, total };
};

List.propTypes = {
  total: number.isRequired,
  contacts: arrayOf(object).isRequired,
};

export default List;
