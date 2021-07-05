import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');

  function titleCH(event) {
    setTitle(event.target.value);
  }

  function amountCH(event) {
    setAmount(event.target.value);
  }

  function dateCH(event) {
    setDate(event.target.value);
  }
  function submitH(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: '$' + enteredAmount,
      date: new Date(enteredDate).toDateString(),
    };

    props.onSaveExpenseDate(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitH}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleCH}
            required="true"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountCH}
            required="true"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateCH}
            value={enteredDate}
            required="true"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
