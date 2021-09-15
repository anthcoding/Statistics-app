import "./App.css";
//Components
import ExpenseItem from "./components/ExpenseItem.component";
//Data
import Data from "./data";

function App() {
  const expenses = Data;

  return (
    <div>
      {expenses.map((item) => {
        return <ExpenseItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default App;
