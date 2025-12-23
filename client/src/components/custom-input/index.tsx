import style from './index.module.css';

type Props = {
  name?: string;
  onChange?: () => void;
  type?: 'text' | 'password';
  placeholder?: string;
};

const CustomInput = ({ name, type, placeholder, onChange }: Props) => {
  return (
    <div className={style.container}>
      <span className={style.name}>{name}</span>
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
