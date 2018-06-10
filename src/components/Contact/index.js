import styled from 'styled-components';
import moment from 'moment';
import Link from 'next/link';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { string, number } from 'prop-types';

export const Wrapper = styled.li`
  display: flex;
`;

const Anchor = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 16px;
  height: 48px;
  font-size: 16px;
  border-bottom: 1px solid rgb(224, 224, 224);
  text-decoration: none;
`;

const Detail = styled.span`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  flex: 1;
  text-align: center;
`;

export const Name = styled(Detail)``;

export const Title = styled(Detail)``;

export const Age = styled(Detail)``;

export const Count = styled(Detail)``;

export const Star = styled(StarIcon).attrs({
  color: 'primary',
})`
  flex: 1;
`;

export const StarBorder = styled(StarBorderIcon).attrs({
  color: 'primary',
})`
  flex: 1;
`;

const Contact = ({
  id, name, title, birthDate, count, isFavorite,
}) => (
  <Wrapper>
    <Link href={{ pathname: '/details', query: { id } }}>
      <Anchor href={`/details?id=${id}`}>
        <Name>{ name }</Name>
        <Title>{ title }</Title>
        <Age>{ moment().diff(moment(birthDate), 'years') }</Age>
        <Count>{ count }</Count>
        {
          isFavorite ?
            <Star /> :
            <StarBorder />
        }
      </Anchor>
    </Link>
  </Wrapper>
);

Contact.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  title: string.isRequired,
  birthDate: string.isRequired,
  count: number.isRequired,
  isFavorite: number.isRequired,
};

export default Contact;
