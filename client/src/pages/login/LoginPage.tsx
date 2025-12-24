import { useState } from 'react';

import CustomButton from '../../components/custom-button';
import CustomForm from '../../components/custom-form';
import CustomInput from '../../components/custom-input';
import CustomLink from '../../components/custom-link';
import Space from '../../components/space';
import { PATHS } from '../../paths';
import Error from '../../components/error';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [passwoed, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!email || !passwoed) return setError('Не все поля заполнеы');

      // отправляем
    } catch (error) {
      console.log('Неизвестная ошибка: ', error);
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
