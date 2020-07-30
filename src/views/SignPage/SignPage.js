import React, { useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
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

const SignPage = () => {
  const [isSigninPage, setSigninPage] = useState(true);

  return (
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
          console.log(values);
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
              <StyledButton type="submit" secondary>
                {isSigninPage ? 'Sign in' : 'Sign up'}
              </StyledButton>
            </StyledButtonsWrapper>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default SignPage;
