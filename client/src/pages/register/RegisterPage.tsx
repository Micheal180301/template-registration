import { useState } from 'react';

import CustomButton from '../../components/custom-button';
import CustomForm from '../../components/custom-form';
import CustomInput from '../../components/custom-input';
import CustomLink from '../../components/custom-link';
import Space from '../../components/space';
import { PATHS } from '../../paths';
import Error from '../../components/error';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { useRegisterMutation } from '../../app/service/authApi';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isInvalidate, setIsInvalidte] = useState(false);

  const navigate = useNavigate();

  const [registerUser] = useRegisterMutation();

  const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsInvalidte(false);
    setError('');
    try {
      if (!email || !name || !password || !confirmPassword) {
        return setError('Not all fields are filled in');
      }
      if (
        password !== confirmPassword &&
        password !== '' &&
        confirmPassword !== ''
      ) {
        setError('Passwords must match');
        setIsInvalidte(true);
        return;
      }
      if (password === confirmPassword && password.length < 6) {
        setIsInvalidte(true);
        setError('Minimum password length 6 symbol');
        return;
      }
      await registerUser({
        email: email,
        name: name,
        password: password,
      }).unwrap();

      navigate(`${PATHS.home}`);
    } catch (err) {
      const errorData = (err as FetchBaseQueryError).data as { error?: string };
      setError(errorData.error || 'Unknown error');
      // console.log('Неизвестная ошибка: ', error);
    }
  };

  return (
    <Layout>
      <CustomForm onSubmit={registerHandler} name="Register">
        <CustomInput
          nameInput="Enter your name"
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput
          nameInput="Enter your email"
          type="text"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          invalid={isInvalidate}
          nameInput="Come up with a password"
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomInput
          invalid={isInvalidate}
          nameInput="Repeat the password"
          type="password"
          placeholder="Password...."
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CustomButton type="submit">Register</CustomButton>
        <Space display="row" size="small">
          Do you already have an account?
          <CustomLink to={PATHS.login}>Sign In!</CustomLink>
        </Space>
        <Space display="row" size="small">
          <Error>{error}</Error>
        </Space>
      </CustomForm>
    </Layout>
  );
};

export default RegisterPage;
