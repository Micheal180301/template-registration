import style from './index.module.css';

type Props = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  border?: 'ghost' | 'base';
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const CustomButton = ({
  children,
  type = 'button',
  border = 'base',
  title,
  disabled = false,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      title={title}
      className={`${style.button} ${style[border]}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
