import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectUser } from '../../app/authSlice';

import Layout from '../../components/layout';
import { useEffect } from 'react';
import { PATHS } from '../../paths';

const HamePage = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`${PATHS.login}`);
    }
  }, [navigate, user]);
  return (
    <Layout>
      <div>HamePage</div>
    </Layout>
  );
};

export default HamePage;
