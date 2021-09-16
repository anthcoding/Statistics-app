//React
import React, { useState } from "react";
//Styles
import "./NewExpense.component.css";
//Components
import FormExpense from "./FormExpense.component";
//UUID
import uuid from "react-uuid";

const NewExpense = ({ saveExpenseDataHandlerSecond }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: uuid(),
    };
    saveExpenseDataHandlerSecond(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={startEditingHandler}>Add New Expense</button>
      ) : (
        <FormExpense onSaveExpensedata={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
