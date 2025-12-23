import CustomButton from '../../components/custom-button';
import CustomForm from '../../components/custom-form';
import CustomInput from '../../components/custom-input';
import CustomLink from '../../components/custom-link';
import Space from '../../components/space';
import { PATHS } from '../../paths';

const LoginPage = () => {
  return (
    <CustomForm name="Login" onSubmit={() => null}>
      <CustomInput
        placeholder="Email"
        name="Enter email"
        type="text"
        onChange={() => null}
      />
      <CustomInput
        placeholder="Password"
        name="Enter password"
        type="password"
        onChange={() => null}
      />
      <CustomButton type="submit">Log In!</CustomButton>
      <Space display="row" size="small">
        You don't have an account?
        <CustomLink to={PATHS.register}>Registration</CustomLink>
      </Space>
    </CustomForm>
  );
};

export default LoginPage;
