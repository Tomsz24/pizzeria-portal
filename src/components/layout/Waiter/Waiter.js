import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => {
  const { components } = styles;
  return (
    <div className={components}>
      <h2>Waiter View</h2>
      <Link to={`/waiter/order/new`}>new order</Link>
      <Link to={`/waiter/order/:id`}>order id</Link>
    </div>
  );
};

export default Waiter;