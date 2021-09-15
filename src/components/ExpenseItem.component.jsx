//Styles
import "./ExpenseItem.css";
//Components
import ExpenseDate from "./ExpenseDate.component.jsx";

function ExpenseItem({ item }) {
  const { date, title, amount } = item;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
