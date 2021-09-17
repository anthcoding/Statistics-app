//Styles
import "./ExpenseFilter.component.css";

const ExpenseFilter = ({ onChangeFilter, selected }) => {
  const selectHandler = (e) => {
    let year = e.target.value;
    onChangeFilter(year);
  };
  return (
    <div className="expense-filter__container">
      <div className="expense-filter__title">Filter By Year</div>
      <div className="expense-filter__selector">
        <select name="years" value={selected} onChange={selectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
