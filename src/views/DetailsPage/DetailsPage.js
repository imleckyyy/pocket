import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const DetailsPage = ({ item }) => {
  const [currentItem] = item;
  const { title, description, link, image } = currentItem;

  return (
    <StandardTemplate>
      <StyledWrapper>
        <Heading>{title}</Heading>
        {description && <Paragraph>{description}</Paragraph>}
        {image && <StyledImg src={image} alt={title} />}
        <StyledControlsWrapper>
          <StyledButton as="a" href={link} target="_blank">
            Przejdź do strony
          </StyledButton>
        </StyledControlsWrapper>
      </StyledWrapper>
    </StandardTemplate>
  );
};

DetailsPage.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object),
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
    item: state[pageType].filter((item) => item.id === ownProps.match.params.id),
  };
};

export default connect(mapStateToProps)(DetailsPage);
