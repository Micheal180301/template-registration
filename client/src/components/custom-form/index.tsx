// import {
//   useRegisterMutation,
//   useLoginMutation,
// } from '../../app/service/authApi';
import style from './index.module.css';

type Props = {
  children: React.ReactNode;
  name: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isError?: string;
};

const CustomForm = ({ children, name, onSubmit, isError }: Props) => {
  // const [login, loginResult] = useLoginMutation(); //
  // const [register, registerResult] = useRegisterMutation(); // Result содержит { data, error, isLoading, isSuccess, isError }

  return (
    <form
      onSubmit={onSubmit}
      className={`${style.form}  ${isError ? style.invalid : ''}`}
    >
      <h1 className={style.name}>{name}</h1>
      <div className={`${style.main}`}>{children}</div>
    </form>
  );
};

export default CustomForm;
