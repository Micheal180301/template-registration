import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import React from 'react';
import Header from '../header';
import Space from '../space';
import CustomButton from '../custom-button';

import { selectUser } from '../../app/authSlice';
import { logOut } from '../../app/authSlice';
import { PATHS } from '../../paths';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const location = useLocation();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
    localStorage.removeItem('token');
    navigate(`${PATHS.login}`);
  };
  return (
    <div>
      <Header name="Registration-Template">
        <Space size="medium" display="row">
          {user && (
            <CustomButton type="button" border="ghost" onClick={logOutHandler}>
              Log Out
            </CustomButton>
          )}
          {location.pathname === PATHS.login && (
            <CustomButton
              type="button"
              border="ghost"
              onClick={() => {
                navigate(`${PATHS.register}`);
              }}
            >
              Register!
            </CustomButton>
          )}
          {location.pathname === PATHS.register && (
            <CustomButton
              type="button"
              border="ghost"
              onClick={() => {
                navigate(`${PATHS.login}`);
              }}
            >
              login!
            </CustomButton>
          )}
        </Space>
      </Header>
      {children}
    </div>
  );
};

export default Layout;
