import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  const { component } = styles;

  return (
    <div className={component}>
      <h2>Tables Views</h2>
      <Link to={`/tables/booking/new`}>new booking</Link>
      <Link to={`/tables/booking/:id`}>booking id</Link>
      <Link to={`/tables/events/new`}>new event</Link>
      <Link to={`/tables/events/:id`}>event id</Link>
    </div>
  );
};

export default Tables;