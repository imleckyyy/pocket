import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: inline-block;
  width: 75px;
  height: 75px;
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default ButtonIcon;
