import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/statics/logo.png';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo}></img>
      </Link>
      <Nav>
        <NavList>
          <li>
            <NavLink to="/">Characters</NavLink>
          </li>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

export { Header };

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: var(--background-color);
  z-index: 1;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-weight: 800;
  display: inline-block;
  transition: transform 250ms;
  will-change: transform;
  font-size: clamp(1.5rem, 8vw - 2.5rem, 2.5rem);
  &:hover {
    transform: scale(1.1);
  }
`;
