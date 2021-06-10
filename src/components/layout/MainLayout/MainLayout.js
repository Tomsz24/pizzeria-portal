import React from 'react';
import PropsTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  const { component } = styles;
  return (
    <div className={component}>
      <PageNav />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropsTypes.any,
};
export default MainLayout;