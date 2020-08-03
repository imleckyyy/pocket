import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Radio from 'components/atoms/Radio/Radio';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100vh;
  background: #080810;
  padding: 50px;
  border-left: 5px solid ${({ theme }) => theme.secondary};
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  @media (min-width: 768px) {
    width: 500px;
  }
`;

const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const NewItemSidebar = ({ isVisible, toggleNewItemFormFn, addItem }) => (
  <StyledWrapper isVisible={isVisible}>
    <Heading>Add new item</Heading>

    <Formik
      initialValues={{
        type: 'videos',
        title: '',
        description: '',
        image: '',
        link: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Title is required';
        }
        if (!values.link) {
          errors.link = 'Link is required';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        addItem(values);
        resetForm({});
        toggleNewItemFormFn();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Radio
            name="type"
            label="Video"
            value="videos"
            isChecked={values.type === 'videos'}
            onChangeFn={() => setFieldValue('type', 'videos')}
          />
          <Radio
            name="type"
            label="Article"
            value="articles"
            isChecked={values.type === 'articles'}
            onChangeFn={() => setFieldValue('type', 'articles')}
          />
          <StyledInput
            type="text"
            name="title"
            placeholder="Title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.title && touched.title && errors.title}
          />
          <StyledInput
            type="text"
            name="link"
            placeholder="Link eg. www.youtube.com/xxx"
            value={values.link}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.link && touched.link && errors.link}
          />
          <StyledInput
            type="text"
            name="description"
            placeholder="Additional description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <StyledInput
            type="text"
            name="image"
            placeholder="Image url"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button secondary type="submit">
            Add item
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemSidebar.propTypes = {
  isVisible: PropTypes.bool,
  toggleNewItemFormFn: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemSidebar.defaultProps = {
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(NewItemSidebar);
