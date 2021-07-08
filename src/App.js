import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { title: 'Car  Insurance', amount: '$' + 700, date: new Date(2020, 2, 28) },
  { title: 'Toilet paper', amount: '$' + 150, date: new Date(2020, 1, 4) },
  { title: 'Rent', amount: '$' + 8000, date: new Date(2021, 3, 15) },
  { title: 'Electricity', amount: '$' + 300, date: new Date(2021, 6, 17) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
