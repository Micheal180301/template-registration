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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [loginUser] = useLoginMutation();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!email || !password) return setError('Not all fields are filled in');

      await loginUser({ email, password }).unwrap();
      navigate(`${PATHS.home}`);
    } catch (err) {
      const errorData = (err as FetchBaseQueryError).data as { error?: string };
      setError(errorData.error || 'Unknown error');
      // console.log('Неизвестная ошибка: ', err);
    }
  };

  return (
    <CustomForm name="Login" onSubmit={login}>
      <CustomInput
        placeholder="Email"
        nameInput="Enter email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        placeholder="Password"
        nameInput="Enter password"
        type="password"
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
  );
};

export default LoginPage;
