import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { routes } from 'routes';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import LogoImage from 'assets/logo.svg';
import VideoIcon from 'assets/icons/youtube.svg';
import ArticleIcon from 'assets/icons/dashboard.svg';
import LoginIcon from 'assets/icons/login.svg';

const StyledWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 15px 0 15px;
  background: #080810;

  @media (min-width: 768px) {
    width: 100px;
  }
`;

const StyledLogo = styled(ButtonIcon)`
  opacity: 1;
  max-width: 80%;
  margin: 0 0 20px;
  background-size: 80%;
`;

const StyledNav = styled.nav`
  flex: 1;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledListLink = styled(ButtonIcon)`
  opacity: 0.5;
  &.active {
    opacity: 1;
  }
`;

const StyledLoginButton = styled(ButtonIcon)`
  display: block;
  background-size: 30%;
  opacity: 0.5;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogo as={NavLink} icon={LogoImage} to="/" />
    <StyledNav>
      <StyledList>
        <li>
          <StyledListLink as={NavLink} icon={VideoIcon} to="/videos" activeclass="active" />
        </li>
        <li>
          <StyledListLink as={NavLink} icon={ArticleIcon} to="/articles" activeclass="active" />
        </li>
      </StyledList>
    </StyledNav>
    <StyledLoginButton icon={LoginIcon} as={Link} to={routes.signin} />
  </StyledWrapper>
);

export default Sidebar;
