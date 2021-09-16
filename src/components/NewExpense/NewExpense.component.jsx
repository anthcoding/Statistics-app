//Styles
import "./NewExpense.component.css";
//Components
import FormExpense from "./FormExpense.component";
//UUID
import uuid from "react-uuid";

const NewExpense = ({ saveExpenseDataHandlerSecond }) => {
  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: uuid(),
    };
    saveExpenseDataHandlerSecond(expenseData);
  };

  return (
    <div className="new-expense">
      <FormExpense onSaveExpensedata={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
