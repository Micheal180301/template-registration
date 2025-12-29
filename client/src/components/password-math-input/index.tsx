import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useState, type ChangeEvent } from 'react';
import style from './index.module.css';

type Props = {
  nameInput: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  minimalLangth: number;
  length: number;
  match: string;
  value: string;
};
const PasswordMatchInput = ({
  nameInput,
  placeholder,
  onChange,
  minimalLangth,
  length,
  match,
  value,
}: Props) => {
  const [type, setType] = useState(true);

  const borderInpute = () => {
    if (length === 0) {
      return style.validBorder;
    } else if (length < minimalLangth || match !== value) {
      return style.invalidBorder;
    } else if (length >= minimalLangth) {
      return style.validBorder;
    }
  };
  const nameColor = () => {
    if (length === 0) {
      return style.validNameColor;
    } else if (length < minimalLangth || match !== value) {
      return style.invalidNameColor;
    } else if (length >= minimalLangth) {
      return style.validNameColor;
    }
  };

  const name = () => {
    if (length === 0) {
      return nameInput;
    } else if (length < minimalLangth) {
      return `The password must be more than ${minimalLangth} characters long!`;
    } else if (match !== value) {
      return `Passwords must match`;
    } else if (length >= minimalLangth) {
      return nameInput;
    }
  };
  return (
    <div className={style.container}>
      <span className={`${style.name} ${nameColor()}`}>{name()}</span>
      <div className={style.inputWrapper}>
        <input
          type={type ? 'password' : 'text'}
          placeholder={placeholder}
          onChange={onChange}
          className={`${style.input} ${borderInpute()}`}
        />
        <span onClick={() => setType(!type)} className={style.type}>
          {type ? <EyeInvisibleFilled /> : <EyeFilled />}
        </span>
      </div>
    </div>
  );
};

export default PasswordMatchInput;
