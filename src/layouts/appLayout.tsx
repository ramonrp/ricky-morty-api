import * as React from 'react';
import styled from 'styled-components';
import { Header } from './components';
import { Hero } from './components';
const AppLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <main>{children}</main>
      <Footer>Made by Ramon</Footer>
    </Wrapper>
  );
};

export { AppLayout };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  margin-top: auto;
  display: grid;
  place-items: center;
  padding: 32px;
`;
