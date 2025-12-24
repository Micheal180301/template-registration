import style from './index.module.css';
import type { ChangeEvent } from 'react';

type Props = {
  nameInput?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
  placeholder?: string;
};

const CustomInput = ({ nameInput, type, placeholder, onChange }: Props) => {
  return (
    <div className={style.container}>
      <span className={style.name}>{nameInput}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={style.input}
      />
    </div>
  );
};

export default CustomInput;
