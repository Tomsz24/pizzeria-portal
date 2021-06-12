import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './PageNav.module.scss';

const PageNav = () => {
  const { component, link } = styles;
  return (
    <nav className={component}>
      <Button component={NavLink} className={link} exact to={`/`} activeClassName='active'>
        Home
      </Button>
      <Button component={NavLink} className={link} to={`/login`} activeClassName='active'>
        Login
      </Button>
      <Button component={NavLink} className={link} to={`/tables`} activeClassName='active'>
        Tables
      </Button>
      <Button component={NavLink} className={link} to={`/waiter`} activeClassName='active'>
        Waiter
      </Button>
      <Button component={NavLink} className={link} to={`kitchen`} activeClassName='active'>
        Kitchen
      </Button>
    </nav>
  );
};

export default PageNav;