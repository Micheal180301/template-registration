import React from 'react';
import Header from '../header';
import Space from '../space';
import CustomButton from '../custom-button';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header name="Registration-Template">
        <Space size="medium" display="row">
          <CustomButton type="button" border="ghost" onClick={() => null}>
            Log In!
          </CustomButton>
        </Space>
      </Header>
      {children}
    </div>
  );
};

export default Layout;
