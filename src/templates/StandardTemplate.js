import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import PlusIcon from 'assets/icons/plus.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import TopBar from 'components/organisms/TopBar/TopBar';
import NewItemSidebar from 'components/organisms/NewItemSidebar/NewItemSidebar';

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 80px;
  padding-right: 15px;

  @media (min-width: 768px) {
    padding-left: 120px;
    padding-right: 20px;
  }
`;

const StyledChildrenWrapper = styled.div`
  padding: 20px 0;
`;

const StyledPlusButton = styled(ButtonIcon)`
  background-color: ${({ theme }) => theme.secondary};
  background-size: 40%;
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 99;
  width: 55px;
  height: 55px;

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

const StandardTemplate = ({ userId, children }) => {
  const [isNewItemFormVisible, toggleNewItemForm] = useState(false);

  return (
    <>
      {!userId && <Redirect to={routes.signin} />}
      <StyledWrapper>
        <Sidebar />
        <StyledContentWrapper>
          <TopBar />
          <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
        </StyledContentWrapper>
        <StyledPlusButton
          icon={PlusIcon}
          onClick={() => toggleNewItemForm(!isNewItemFormVisible)}
        />
        <NewItemSidebar isVisible={isNewItemFormVisible} toggleNewItemFormFn={toggleNewItemForm} />
      </StyledWrapper>
    </>
  );
};

StandardTemplate.propTypes = {
  userId: PropTypes.string,
  children: PropTypes.element.isRequired,
};

StandardTemplate.defaultProps = {
  userId: null,
};

const mapStateToProps = ({ userId }) => ({ userId });

export default connect(mapStateToProps)(StandardTemplate);
