import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import { string, bool } from 'prop-types';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 16px;
  font-size: 16px;
`;

export const Name = styled.span`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Favorite = styled(StarIcon).attrs({
  color: 'primary',
})``;

const Contact = ({ name, isFavorite }) => (
  <Wrapper>
    <Name>{ name }</Name>
    {
      !!isFavorite &&
        <Favorite />
    }
  </Wrapper>
);

Contact.defaultProps = {
  isFavorite: false,
};

Contact.propTypes = {
  name: string.isRequired,
  isFavorite: bool,
};

export default Contact;
