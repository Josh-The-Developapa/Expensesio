import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
function App() {
  const expenses = [
    { title: 'Car  Insurance', amount: 700, date: new Date(2021, 2, 28) },
    { title: 'Toilet paper', amount: 150, date: new Date(2021, 1, 4) },
    { title: 'Rent', amount: 8000, date: new Date(2021, 3, 15) },
    { title: 'Electricity', amount: 300, date: new Date(2021, 6, 17) },
  ];

  function addExpenseH(expense) {
    console.log('In app.js');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onaddExpense={addExpenseH} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
