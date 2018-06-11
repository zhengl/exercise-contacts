import { Component } from 'react';
import styled from 'styled-components';
import { string, number, shape, array } from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Layout from '../components/Layout';
import Email from '../components/Email';
import Phone from '../components/Phone';
import { fetchDetails } from '../dao/Contacts';
import { addDetails, getDetails } from '../store';
import track from '../analytics';

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgb(224, 224, 224);
`;

const Main = styled.div``;

const Contacts = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Name = styled.span`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.87);
  flex: 1;
`;

export const Star = styled(StarIcon).attrs({
  color: 'primary',
})`
`;

export const StarBorder = styled(StarBorderIcon).attrs({
  color: 'primary',
})`
`;

class Details extends Component {
  componentDidMount() {
    track('details', {
      id: this.props.id,
    });
  }

  render() {
    const {
      name, title, isFavorite, types,
    } = this.props;

    return (
      <Layout>
        <Header>
          <Name>{ `${title} ${name}` }</Name>
          {
            isFavorite ?
              <Star /> :
              <StarBorder />
          }
        </Header>
        <Main>
          <Contacts>
            {
              types.email &&
                types.email.map((item, index) => <Email key={`${item}_${index}`} address={item} />) // eslint-disable-line react/no-array-index-key
            }
            {
              types.phone &&
                types.phone.map((item, index) => <Phone key={`${item}_${index}`} number={item} />) // eslint-disable-line react/no-array-index-key
            }
          </Contacts>
        </Main>
      </Layout>
    );
  }
}

Details.getInitialProps = async ({ query }) => {
  const { id } = query;
  const details = await fetchDetails(id);
  addDetails(id, details);

  return { ...getDetails(id) };
};

Details.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  title: string.isRequired,
  types: shape({
    email: array,
    phone: array,
  }).isRequired,
  isFavorite: number.isRequired,
};

export default Details;
