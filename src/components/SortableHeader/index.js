import { Component } from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Header = styled.ul`
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

export const HeaderCell = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
`;

export const Label = styled.span`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.54);
  text-align: center;
`;

const UpIcon = styled(ArrowUpwardIcon).attrs({
  color: 'primary',
})``;

const DownIcon = styled(ArrowDownwardIcon).attrs({
  color: 'primary',
})``;

const COLUMNS = [
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'title',
    label: 'Title',
  },
  {
    name: 'birthDate',
    label: 'Age',
  },
  {
    name: 'count',
    label: 'Count',
  },
  {
    name: 'isFavorite',
    label: 'Favorite',
  },
];

class SortableHeader extends Component {
  state = {
    column: null,
    order: null,
  }

  onSort = name => () => {
    const { onSort } = this.props;
    const { column, order } = this.state;

    if (column !== name) {
      const sort = {
        column: name,
        order: 'asc',
      };
      this.setState(sort);
      onSort(sort);
    } else {
      const sort = {
        column: name,
        order: order === 'asc' ? 'desc' : 'asc',
      };
      this.setState(sort);
      onSort(sort);
    }
  }

  render() {
    const { column, order } = this.state;

    return (
      <Header>
        {
          COLUMNS.map(({ name, label }) => (
            <HeaderCell key={name} onClick={this.onSort(name)}>
              <Label>{ label }</Label>
              {
                column === name && order === 'asc' &&
                  <UpIcon />
              }
              {
                column === name && order === 'desc' &&
                  <DownIcon />
              }
            </HeaderCell>
          ))
        }
      </Header>
    );
  }
}

SortableHeader.propTypes = {
  onSort: func.isRequired,
};

export default SortableHeader;
