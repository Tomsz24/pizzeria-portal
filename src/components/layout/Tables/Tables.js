import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  const { component } = styles;

  return (
    <div className={component}>
      <h2>Tables Views</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>new booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>booking id</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>new event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>event id</Link>
    </div>
  );
};

export default Tables;