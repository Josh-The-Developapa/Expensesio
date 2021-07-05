import { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickFunc = () => {
    setTitle('Updated');
  };
  return (
    <Card className="expense-item">
      <div>
        <h4>{props.date.toDateString()}</h4>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">$ {props.amount}</div>
      <button onClick={clickFunc}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
