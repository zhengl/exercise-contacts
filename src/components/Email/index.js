import styled from 'styled-components';
import { string } from 'prop-types';
import EmailIcon from '@material-ui/icons/Email';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  font-size: 16px;
  border-bottom: 1px solid rgb(224, 224, 224);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  flex: 1;
  text-align: center;
`;

export const Icon = styled(EmailIcon).attrs({
  color: 'disabled',
})`
  margin-right: 16px;
`;

export const Content = styled.span``;

const Email = ({ address }) => (
  <Wrapper>
    <Icon />
    <Content>{ address }</Content>
  </Wrapper>
);

Email.propTypes = {
  address: string.isRequired,
};

export default Email;
