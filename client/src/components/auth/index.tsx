import { useCurrentQuery } from '../../app/service/authApi';
import Spinner from '../spinner';

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <Spinner />;
  }
  return children;
};

export default Auth;
