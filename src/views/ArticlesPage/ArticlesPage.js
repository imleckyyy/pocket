import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchItems } from 'actions';
import PropTypes from 'prop-types';
import StandardTemplate from 'templates/StandardTemplate';
import Card from 'components/molecules/Card/Card';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledGridWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ArticlesPage = ({ items, fetchArticles }) => {
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <StandardTemplate>
      <>
        <Heading>Articles</Heading>
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

ArticlesPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
  fetchArticles: PropTypes.func.isRequired,
};

ArticlesPage.defaultProps = {
  items: [],
};

const mapStateToProps = ({ articles }) => ({ items: articles });

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);
