import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchItems } from 'actions';
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

const VideosPage = ({ items, fetchVideos }) => {
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <StandardTemplate>
      <>
        <Heading>Videos</Heading>
        {items.length ? (
          <StyledGridWrapper>
            {items.map(({ _id: id, title, image, type }) => (
              <Card id={id} title={title} image={image} type={type} key={id} />
            ))}
          </StyledGridWrapper>
        ) : (
          <Paragraph>No items found :(</Paragraph>
        )}
      </>
    </StandardTemplate>
  );
};

VideosPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
  fetchVideos: PropTypes.func.isRequired,
};

VideosPage.defaultProps = {
  items: [],
};

const mapStateToProps = ({ videos }) => ({ items: videos });

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchItems('videos')),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosPage);
