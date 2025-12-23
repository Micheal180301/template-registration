import style from './index.module.css';

type Props = {
  children?: React.ReactNode;
  display: 'row' | 'column-left' | 'column-right';
  size: 'small' | 'medium' | 'big';
};

const Space = ({ children, display, size = 'small' }: Props) => {
  return (
    <div className={`${style.space} ${style[size]} ${style[display]}`}>
      {children}
    </div>
  );
};

export default Space;
