import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const handleDataSubmit = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onSubmitDataApp(expenseData);
  };
  return (
    //in the ExpenseForm We are passeing a function as a prop
    <div className="new-expense">
      <ExpenseForm onSubmitData={handleDataSubmit} />
    </div>
  );
};

export default NewExpense;
