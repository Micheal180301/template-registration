import CustomButton from '../../components/custom-button';
import CustomForm from '../../components/custom-form';
import CustomInput from '../../components/custom-input';
import CustomLink from '../../components/custom-link';
import Space from '../../components/space';
import { PATHS } from '../../paths';

const RegisterPage = () => {
  return (
    <>
      <CustomForm onSubmit={() => null} name="Register">
        <CustomInput
          name="Enter your name"
          type="text"
          placeholder="Name..."
          onChange={() => null}
        />
        <CustomInput
          name="Enter your email"
          type="text"
          placeholder="Email..."
          onChange={() => null}
        />
        <CustomInput
          name="Сome up with a password"
          type="password"
          placeholder="Password..."
          onChange={() => null}
        />
        <CustomInput
          name="Repeat the password"
          type="password"
          placeholder="Password...."
          onChange={() => null}
        />
        <CustomButton type="submit">Register</CustomButton>
        <Space display="row" size="small">
          Do you already have an account?
          <CustomLink to={PATHS.login}>Sign In!</CustomLink>
        </Space>
      </CustomForm>
    </>
  );
};

export default RegisterPage;
