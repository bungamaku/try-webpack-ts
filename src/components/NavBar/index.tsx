import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from 'components/SearchBar';

const NavContainer = styled.nav`
  height: 72px;
  margin: 0;
  background: #ffa843;
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  font-weight: normal;
  font-size: 14px;
  color: black;
  padding: 25px;
`;

const LinkContainer = styled.div`
  margin-left: 9%;
  margin-right: 9%;
  padding: 25px;
`;

export default function NavBar() {
  return (
    <NavContainer>
      <SearchBar />
      <LinkContainer>
        <NavLink to='/'>Discover</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
      </LinkContainer>
    </NavContainer>
  );
}
