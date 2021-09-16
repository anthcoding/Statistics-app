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
import ExpenseFilter from "./components/Expenses/ExpenseFilter/ExpenseFilter.component";

const App = () => {
  const [expenses, setExpenses] = useState(Data);
  const [filteredYear, setFilteredYear] = useState("2021");

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
    console.log(expense);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <NewExpense saveExpenseDataHandlerSecond={addExpenseHandler} />
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((item) => {
          return <ExpenseItem key={item.id} item={item} />;
        })}
      </Card>
    </>
  );
};

export default App;
