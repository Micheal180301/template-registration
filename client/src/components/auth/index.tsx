import { useCurrentQuery } from '../../app/service/authApi';

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <div>загрузка</div>;
  }
  return children;
};

export default Auth;
