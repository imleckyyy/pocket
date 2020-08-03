import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { logout as logoutAction } from 'actions';
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

const Sidebar = ({ userId, logout }) => (
  <StyledWrapper>
    <StyledLogo as={NavLink} icon={LogoImage} to={routes.home} />
    <StyledNav>
      <StyledList>
        <li>
          <StyledListLink as={NavLink} icon={VideoIcon} to={routes.videos} activeclass="active" />
        </li>
        <li>
          <StyledListLink
            as={NavLink}
            icon={ArticleIcon}
            to={routes.articles}
            activeclass="active"
          />
        </li>
      </StyledList>
    </StyledNav>
    {userId ? (
      <StyledLoginButton icon={LoginIcon} onClick={() => logout()} />
    ) : (
      <StyledLoginButton icon={LoginIcon} as={Link} to={routes.signin} />
    )}
  </StyledWrapper>
);

Sidebar.propTypes = {
  userId: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  userId: null,
};

const mapStateToProps = ({ userId }) => ({ userId });

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
