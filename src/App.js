import "./App.css";
//Data
import Data from "./data";
//Components
import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem.component";
import Card from "./components/UI/Card/Card.component";
import NewExpense from "./components/NewExpense/NewExpense.component";

const App = () => {
  const expenses = Data;

  return (
    <>
      <NewExpense />
      <Card className="expenses">
        {expenses.map((item) => {
          return <ExpenseItem key={item.id} item={item} />;
        })}
      </Card>
    </>
  );
};

export default App;
