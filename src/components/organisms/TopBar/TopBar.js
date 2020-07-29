import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { routes } from 'routes';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 15px 0;
`;

const TopBar = () => (
  <StyledWrapper>
    <Input search placeholder="Search..." />
    <Button as={Link} to={routes.signin}>
      Sign in
    </Button>
  </StyledWrapper>
);

export default TopBar;
