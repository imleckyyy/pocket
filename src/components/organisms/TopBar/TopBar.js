import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
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

const TopBar = () => (
  <StyledWrapper>
    <Input search placeholder="Search..." />
    <StyledButton as={Link} to={routes.signin}>
      Sign in
    </StyledButton>
  </StyledWrapper>
);

export default TopBar;
