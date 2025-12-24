import style from './index.module.css';
import type { ChangeEvent } from 'react';

type Props = {
  children: React.ReactNode;
  name: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const CustomForm = ({ children, name, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <h1 className={style.name}>{name}</h1>
      <div className={style.main}>{children}</div>
    </form>
  );
};

export default CustomForm;
