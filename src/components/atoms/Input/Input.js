import styled, { css } from 'styled-components';
import MagnifierIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
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

export default Input;
