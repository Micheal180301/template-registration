import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import style from './index.module.css';

type Props = {
  nameInput?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  invalid?: boolean;
};

const PasswordInput = ({
  nameInput,
  placeholder,
  onChange,
  invalid = false,
}: Props) => {
  const [type, setType] = useState(false);
  const borderClass = invalid ? style.invalid : style.base;
  const nameClass = invalid ? style.nameRed : null;
  return (
    <div className={style.container}>
      <span className={`${style.name} ${nameClass}`}>{nameInput}</span>
      <div className={style.inputWrapper}>
        <input
          type={type ? 'password' : 'text'}
          placeholder={placeholder}
          onChange={onChange}
          className={`${style.input} ${borderClass}`}
        />
        <span onClick={() => setType(!type)} className={style.type}>
          {type ? <EyeFilled /> : <EyeInvisibleFilled />}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
