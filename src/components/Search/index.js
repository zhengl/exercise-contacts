import { Component } from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  font-size: 24px;
  flex: 1;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid rgb(224, 224, 224);
  outline: none;

  &:focus {
    border-bottom: 2px solid #3f51b5;
  }
`;

export const Icon = styled(SearchIcon).attrs({
  color: 'primary',
})`
  margin-right: 16px;
`;

class Search extends Component {
  onChange = (event) => {
    this.props.onQueryChange(event.target.value);
  }

  render() {
    const { query } = this.props;

    return (
      <Wrapper>
        <Icon />
        <Input value={query} onChange={this.onChange} />
      </Wrapper>
    );
  }
}

Search.propTypes = {
  query: string.isRequired,
  onQueryChange: func.isRequired,
};

export default Search;
