import style from './index.module.css';

type Props = {
  children: React.ReactNode;
  theme: 'primary' | 'base' | 'utility' | 'light';
};
const ThemeProvider = ({ children, theme }: Props) => {
  const themeApp = () => {
    if (theme === 'base') return style.base;
    if (theme === 'primary') return style.primary;
    if (theme === 'utility') return style.utility;
    if (theme === 'light') return style.light;
  };
  return <section className={`${style.app} ${themeApp()}`}>{children}</section>;
};

export default ThemeProvider;
