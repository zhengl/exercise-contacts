import styled from 'styled-components';
import moment from 'moment';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { string, number } from 'prop-types';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  font-size: 16px;
  border-bottom: 1px solid rgb(224, 224, 224);
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
  name, title, birthDate, count, isFavorite,
}) => (
  <Wrapper>
    <Name>{ name }</Name>
    <Title>{ title }</Title>
    <Age>{ moment().diff(moment(birthDate), 'years') }</Age>
    <Count>{ count }</Count>
    {
      isFavorite ?
        <Star /> :
        <StarBorder />
    }
  </Wrapper>
);

Contact.propTypes = {
  name: string.isRequired,
  title: string.isRequired,
  birthDate: string.isRequired,
  count: number.isRequired,
  isFavorite: number.isRequired,
};

export default Contact;
