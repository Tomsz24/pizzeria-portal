import React from 'react';
import PropsTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

const MainLayout = ({ children }) => {
  return (
    <div>
      <PageNav />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropsTypes.any,
};
export default MainLayout;