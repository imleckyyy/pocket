import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import MagnifierIcon from 'assets/icons/magnifier.svg';

const StyledInput = styled.input`
  border: none;
  background: #191924;
  border-radius: 30px;
  padding: 10px 20px;
  color: #c6c6c8;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  resize: none;

  ${({ search }) =>
    search &&
    css`
      padding-left: 45px;
      background-image: url(${() => MagnifierIcon});
      background-repeat: no-repeat;
      background-position: 15px 55%;
    `}
`;

const InputError = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 0;
  margin: 0 15px 10px;
`;

const Input = ({ errors, ...props }) => {
  return (
    <>
      <StyledInput {...props} />
      {errors && <InputError>{errors}</InputError>}
    </>
  );
};

Input.propTypes = {
  errors: PropTypes.string,
};

Input.defaultProps = {
  errors: null,
};

export default Input;
