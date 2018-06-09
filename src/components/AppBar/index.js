import styled from 'styled-components';
import { string } from 'prop-types';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 72px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, .2);
  background: #3f51b5;
`;

export const Title = styled.span`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.87);
  padding: 0 16px;
`;

const AppBar = ({ title }) => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
);

AppBar.propTypes = {
  title: string.isRequired,
};

export default AppBar;
