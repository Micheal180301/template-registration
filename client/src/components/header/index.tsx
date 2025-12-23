import style from './index.module.css';

type Props = {
  name: string;
  children?: React.ReactNode;
};

const Header = ({ name, children }: Props) => {
  return (
    <header className={style.header}>
      <h1 className={style.name}>{name}</h1>
      {children}
    </header>
  );
};

export default Header;
