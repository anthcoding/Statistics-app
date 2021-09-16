//React
import { useState } from "react";
//Styles
import "./ExpenseItem.component.css";
//Components
import ExpenseDate from "../ExpenseDate/ExpenseDate.component";
import Card from "../../UI/Card/Card.component";

const ExpenseItem = ({ item }) => {
  const { date, title, amount } = item;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
