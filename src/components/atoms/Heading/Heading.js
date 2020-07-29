import styled from 'styled-components';

const Heading = styled.p`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  padding: 0;
  margin-top: 0;
`;

export default Heading;
