import { useState } from 'react';

import CustomButton from '../../components/custom-button';
import CustomForm from '../../components/custom-form';
import CustomInput from '../../components/custom-input';
import CustomLink from '../../components/custom-link';
import Space from '../../components/space';
import { PATHS } from '../../paths';
import Error from '../../components/error';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!email || !name || !password || !confirmPassword) {
        return setError('Не все поля заполнены');
      }
      if (
        password !== confirmPassword &&
        password !== '' &&
        confirmPassword !== ''
      ) {
        return setError('Пароли должны совпадать');
      }
      ///отправляем на сервер
    } catch (error) {
      console.log('Неизвестная ошибка: ', error);
    }
  };

  return (
    <>
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
          nameInput="Сome up with a password"
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomInput
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
    </>
  );
};

export default RegisterPage;
