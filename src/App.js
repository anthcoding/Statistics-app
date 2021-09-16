//React
import React, { useState } from "react";
//Styles
import "./App.css";
//Data
import Data from "./data";
//Components
import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem.component";
import Card from "./components/UI/Card/Card.component";
import NewExpense from "./components/NewExpense/NewExpense.component";

const App = () => {
  const [expenses, setExpenses] = useState([...Data]);

  const addExpenseHandler = (expense) => {
    /*  setExpenses((prevState) => {
      return [...prevState, expense];
    }); */
    console.log(expense);
  };

  return (
    <>
      <NewExpense saveExpenseDataHandlerSecond={addExpenseHandler} />
      <Card className="expenses">
        {expenses.map((item) => {
          return <ExpenseItem key={item.id} item={item} />;
        })}
      </Card>
    </>
  );
};

export default App;
