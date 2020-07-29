import styled, { css } from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  border-radius: 25px;
  border: none;
  color: #d1d1d3;
  padding: 10px 15px;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #23232f;
  }

  ${({ secondary, theme }) =>
    secondary &&
    css`
    background: ${() => theme.secondary}};
  `}
`;

export default Button;
