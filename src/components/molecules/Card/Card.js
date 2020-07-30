import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import { Link } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledImage = styled.img`
  display: none;
  max-width: 200px;
  max-height: 100%;
  position: absolute;
  bottom: -30px;
  right: -40px;
  border-radius: 30px 30px 60px 30px;
  transform: scale(0.3);
  transition: transform cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.3s, opacity ease 0.5s;
  opacity: 0.1;

  @media (min-width: 768px) {
    display: block;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.tetrinary};
  padding: 30px;
  border-radius: 30px;

  &:hover ${StyledImage} {
    opacity: 1;
    transform: scale(0.9) translate(-10px, -10px);
  }
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
`;

const Card = ({ id, type, title, image, removeItem }) => (
  <StyledWrapper>
    <StyledHeading>{title}</StyledHeading>
    {image && <StyledImage src={image} />}
    <StyledButton as={Link} to={`/${type}/${id}`} secondary="true">
      View
    </StyledButton>
    <Button onClick={() => removeItem(id, type)}>Remove</Button>
  </StyledWrapper>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  image: PropTypes.string,
};

Card.defaultProps = {
  image: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id, type) => dispatch(removeItemAction(id, type)),
});

export default connect(null, mapDispatchToProps)(Card);
