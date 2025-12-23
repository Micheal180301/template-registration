import style from './index.module.css';

type Props = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const CustomButton = ({
  children,
  type = 'button',
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
      className={style.button}
    >
      {children}
    </button>
  );
};

export default CustomButton;
