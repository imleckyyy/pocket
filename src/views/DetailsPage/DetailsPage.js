import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { api } from 'routes';
import StandardTemplate from 'templates/StandardTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  max-width: 400px;
  margin-bottom: 20px;
`;

const StyledControlsWrapper = styled.footer`
  display: flex;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
`;

const DetailsPage = ({ item, match }) => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (item.length) {
      const [currentItem] = item;
      setActiveItem(currentItem);
    } else {
      const { id } = match.params;
      axios
        .get(`${api.pocket}${id}`)
        .then(({ data }) => {
          setActiveItem(data);
        })
        .catch((error) => console.log(error));
    }
  }, [item, match]);

  return (
    <StandardTemplate>
      <>
        {activeItem ? (
          <StyledWrapper>
            <Heading>{activeItem.title}</Heading>
            {activeItem.description && <Paragraph>{activeItem.description}</Paragraph>}
            {activeItem.image && <StyledImg src={activeItem.image} alt={activeItem.title} />}
            <StyledControlsWrapper>
              <StyledButton as="a" href={activeItem.link} target="_blank">
                {activeItem.link}
              </StyledButton>
            </StyledControlsWrapper>
          </StyledWrapper>
        ) : (
          <h1>Loading</h1>
        )}
      </>
    </StandardTemplate>
  );
};

DetailsPage.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

DetailsPage.defaultProps = {
  item: [],
};

const mapStateToProps = (state, ownProps) => {
  const {
    location: { pathname },
  } = ownProps;

  const pageTypes = ['articles', 'videos'];
  const [pageType] = pageTypes.filter((page) => pathname.includes(page));

  return {
    item: state[pageType].filter((item) => item._id === ownProps.match.params.id),
  };
};

export default connect(mapStateToProps)(DetailsPage);
