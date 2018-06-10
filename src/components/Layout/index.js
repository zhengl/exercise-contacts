import styled from 'styled-components';
import { node } from 'prop-types';
import AppBar from '../AppBar';

const Wrapper = styled.div`
  padding-top: 72px;
`;

const Main = styled.div`
  max-width: 960px;
  margin: 0 auto;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, .2);
`;

const Layout = ({ children }) => (
  <Wrapper>
    <AppBar title="Contacts" />
    <Main>
      { children }
    </Main>
  </Wrapper>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
