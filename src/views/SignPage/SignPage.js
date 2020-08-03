import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { authenticate as authenticateAction, register as registerAction } from 'actions';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Logo from 'assets/logo.svg';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 500px;
  background: #080810;
  padding: 50px;
  border-radius: 30px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledLogo = styled.img`
  display: block;
  margin: 0 auto 30px;
  max-width: 70px;
`;

const SignPage = ({ userId, isLoading, authenticate, register }) => {
  const [isSigninPage, setSigninPage] = useState(true);

  return (
    <>
      {userId && <Redirect to={routes.home} />}
      <StyledWrapper>
        <StyledLogo src={Logo} alt="Pocket" />
        <Heading>{isSigninPage ? 'Sign in' : 'Sign up'}</Heading>

        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.login) {
              errors.login = 'Login is required';
            }
            if (!values.password) {
              errors.password = 'Password is required';
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (isSigninPage) {
              authenticate(values.login, values.password);
            } else {
              register(values.login, values.password);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="text"
                name="login"
                placeholder="Login"
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.login && touched.login && errors.login}
              />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.password && touched.password && errors.password}
              />
              <StyledButtonsWrapper>
                <Button type="button" onClick={() => setSigninPage(!isSigninPage)}>
                  {isSigninPage ? `I don't have account` : `I already have account`}
                </Button>
                <StyledButton type="submit" disabled={isLoading} secondary>
                  {isSigninPage ? 'Sign in' : 'Sign up'}
                </StyledButton>
              </StyledButtonsWrapper>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    </>
  );
};

SignPage.propTypes = {
  userId: PropTypes.string,
  isLoading: PropTypes.bool,
  authenticate: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

SignPage.defaultProps = {
  userId: null,
  isLoading: false,
};

const mapStateToProps = ({ userId, isLoading }) => ({
  userId,
  isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (login, password) => dispatch(authenticateAction(login, password)),
  register: (login, password) => dispatch(registerAction(login, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignPage);
