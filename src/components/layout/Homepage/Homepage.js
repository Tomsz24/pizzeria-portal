import React from 'react';
import styles from './Homepage.module.scss';

const Homepage = () => {
  const { component } = styles;
  return (
    <div className={component}>
      <h2>HOMEPAGE</h2>
    </div>
  );
};

export default Homepage;