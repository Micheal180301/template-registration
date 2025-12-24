import style from './index.module.css';

type Props = {
  children: string;
};
const Error = ({ children }: Props) => {
  return <span className={style.error}>{children}</span>;
};

export default Error;
