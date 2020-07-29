import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.label`
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  margin-right: 10px;
`;

const Radio = ({ name, label, value, isChecked, onChangeFn }) => (
  <StyledWrapper htmlFor={value}>
    <StyledInput
      type="radio"
      id={value}
      name={name}
      value={value}
      checked={isChecked}
      onChange={onChangeFn}
    />
    {label}
  </StyledWrapper>
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChangeFn: PropTypes.func.isRequired,
};

export default Radio;
