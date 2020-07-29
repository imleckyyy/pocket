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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
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
          {articles ? (
            <>
              <StyledHeading>Articles</StyledHeading>
              {articles.map(({ id, title, image, type }) => (
                <Card id={id} title={title} image={image} type={type} key={id} />
              ))}
            </>
          ) : (
            <Paragraph>No articles found :(</Paragraph>
          )}
        </StyledItemsWrapper>

        <StyledItemsWrapper>
          {videos ? (
            <>
              <StyledHeading>Videos</StyledHeading>
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
  articles: articles.reverse().slice(0, 2),
  videos: videos.reverse().slice(0, 2),
});

export default connect(mapStateToProps)(SummaryPage);
