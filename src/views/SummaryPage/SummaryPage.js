import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StandardTemplate from 'templates/StandardTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Card from 'components/molecules/Card/Card';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledGridWrapper = styled.div`
  position: relative;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledItemsWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0;
`;

const SummaryPage = ({ articles, videos }) => (
  <StandardTemplate>
    <>
      <Heading>Latest</Heading>
      <StyledGridWrapper>
        <StyledItemsWrapper>
          <StyledHeading>Articles</StyledHeading>
          {articles.length ? (
            <>
              {articles.map(({ id, title, image, type }) => (
                <Card id={id} title={title} image={image} type={type} key={id} />
              ))}
            </>
          ) : (
            <Paragraph>No articles found :(</Paragraph>
          )}
        </StyledItemsWrapper>

        <StyledItemsWrapper>
          <StyledHeading>Videos</StyledHeading>
          {videos.length ? (
            <>
              {videos.map(({ id, title, image, type }) => (
                <Card id={id} title={title} image={image} type={type} key={id} />
              ))}
            </>
          ) : (
            <Paragraph>No videos found :(</Paragraph>
          )}
        </StyledItemsWrapper>
      </StyledGridWrapper>
    </>
  </StandardTemplate>
);

SummaryPage.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};

SummaryPage.defaultProps = {
  articles: [],
  videos: [],
};

const mapStateToProps = ({ articles, videos }) => ({
  articles: articles.slice(0, 5),
  videos: videos.slice(0, 5),
});

export default connect(mapStateToProps)(SummaryPage);
