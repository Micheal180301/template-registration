import style from './index.module.css';
import type { ChangeEvent } from 'react';

type Props = {
  nameInput?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
  placeholder?: string;
  invalid?: boolean;
};

const CustomInput = ({
  nameInput,
  type,
  placeholder,
  onChange,
  invalid = false,
}: Props) => {
  console.log(invalid);
  const borderClass = invalid ? style.invalid : style.base;
  const nameClass = invalid ? style.nameRed : null;
  return (
    <div className={style.container}>
      <span className={`${style.name} ${nameClass}`}>{nameInput}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`${style.input} ${borderClass}`}
      />
    </div>
  );
};

export default CustomInput;
