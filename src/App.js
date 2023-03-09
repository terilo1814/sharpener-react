import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [expenseList,setExpenseList]=useState();
 
  const addExpenseHandler = (expense) => {
   setExpenseList(expense);
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseList={expenseList}/>
    </div>
  );
}

export default App;
