import { useState } from 'react';

import CustomButton from '../../components/custom-button';
import CustomForm from '../../components/custom-form';
import CustomInput from '../../components/custom-input';
import CustomLink from '../../components/custom-link';
import Space from '../../components/space';
import { PATHS } from '../../paths';
import Error from '../../components/error';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { useLoginMutation } from '../../app/service/authApi';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout';
import PasswordInput from '../../components/password-input';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isInvalidate, setIsInvalidte] = useState(false);

  const navigate = useNavigate();

  const [loginUser] = useLoginMutation();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsInvalidte(false);
    setError('');
    try {
      if (!email || !password) {
        setError('Not all fields are filled in');
        setIsInvalidte(true);
        return;
      }

      await loginUser({ email, password }).unwrap();
      navigate(`${PATHS.home}`);
    } catch (err) {
      const errorData = (err as FetchBaseQueryError).data as { error?: string };
      setIsInvalidte(true);
      setError(errorData.error || 'Unknown error');
      // console.log('Неизвестная ошибка: ', err);
    }
  };

  return (
    <Layout>
      <CustomForm name="Login" onSubmit={login} isError={error}>
        <CustomInput
          invalid={isInvalidate}
          placeholder="Email"
          nameInput="Enter email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          placeholder="Password"
          nameInput="Enter password"
          // type="password"
          invalid={isInvalidate}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton type="submit">Log In!</CustomButton>
        <Space display="row" size="small">
          You don't have an account?
          <CustomLink to={PATHS.register}>Registration</CustomLink>
        </Space>
        <Space display="row" size="small">
          <Error>{error}</Error>{' '}
        </Space>
      </CustomForm>
    </Layout>
  );
};

export default LoginPage;
