import style from './index.module.css';
import { Link } from 'react-router-dom';

type Props = {
  children: string;
  to: string;
};

const CustomLink = ({ children, to }: Props) => {
  return (
    <Link to={to} className={style.link}>
      {children}
    </Link>
  );
};

export default CustomLink;
