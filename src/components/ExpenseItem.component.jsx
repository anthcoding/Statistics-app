//Styles
import "./ExpenseItem.component.css";
//Components
import ExpenseDate from "./ExpenseDate.component.jsx";
import Card from "./Card.component";

function ExpenseItem({ item }) {
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
}

export default ExpenseItem;
