import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StandardTemplate from 'templates/StandardTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Card from 'components/molecules/Card/Card';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledGridWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const VideosPage = ({ items }) => (
  <StandardTemplate>
    <>
      <Heading>Videos</Heading>
      {items.length ? (
        <StyledGridWrapper>
          {items.map(({ id, title, image, type }) => (
            <Card id={id} title={title} image={image} type={type} key={id} />
          ))}
        </StyledGridWrapper>
      ) : (
        <Paragraph>No items found :(</Paragraph>
      )}
    </>
  </StandardTemplate>
);

VideosPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};

VideosPage.defaultProps = {
  items: [],
};

const mapStateToProps = ({ videos }) => ({ items: videos });

export default connect(mapStateToProps)(VideosPage);
