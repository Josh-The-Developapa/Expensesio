import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  let NormalDate = new Date(props.date);
  return (
    <Card className="expense-item">
      <div>
        <h4>{NormalDate.toDateString()}</h4>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
