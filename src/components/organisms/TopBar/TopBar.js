import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout as logoutAction } from 'actions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import { routes } from 'routes';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

const StyledButton = styled(Button)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const TopBar = ({ userId, logout }) => {
  return (
    <StyledWrapper>
      <SearchBar />
      {userId ? (
        <StyledButton onClick={() => logout()}>Logout</StyledButton>
      ) : (
        <StyledButton as={Link} to={routes.signin}>
          Sign in
        </StyledButton>
      )}
    </StyledWrapper>
  );
};

TopBar.propTypes = {
  userId: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

TopBar.defaultProps = {
  userId: null,
};

const mapStateToProps = ({ userId }) => ({ userId });

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
