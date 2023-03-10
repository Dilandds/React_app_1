import React, { useState } from "react";

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
    setEditing(false);
  };

  const [isEditing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const handleCancle = () => {
    setEditing(false);
  };
  return (
    //in the ExpenseForm We are passeing a function as a prop
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={handleEditing}> Add new expense</button>
      ) : (
        <ExpenseForm onSubmitData={handleDataSubmit} onCancle={handleCancle} />
      )}
    </div>
  );
};

export default NewExpense;
