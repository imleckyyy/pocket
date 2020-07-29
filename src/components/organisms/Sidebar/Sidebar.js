import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoImage from 'assets/logo.svg';
import VideoIcon from 'assets/icons/youtube.svg';
import ArticleIcon from 'assets/icons/dashboard.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 15px 0 15px;
  background: #080810;
`;

const StyledLogo = styled(ButtonIcon)`
  opacity: 1;
  margin: 0 0 20px;
  background-size: 80%;
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

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogo as={NavLink} icon={LogoImage} to="/" />
    <nav>
      <StyledList>
        <li>
          <StyledListLink as={NavLink} icon={VideoIcon} to="/videos" activeclass="active" />
        </li>
        <li>
          <StyledListLink as={NavLink} icon={ArticleIcon} to="/articles" activeclass="active" />
        </li>
      </StyledList>
    </nav>
  </StyledWrapper>
);

export default Sidebar;
