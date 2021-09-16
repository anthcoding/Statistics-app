//React
import React, { useState } from "react";
//Styles
import "./FormExpense.component.css";

const FormExpense = ({ onSaveExpensedata }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: new Date(e.target.value),
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
    onSaveExpensedata(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.title}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default FormExpense;
