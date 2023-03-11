import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
export default function Expenses(props) {
  const [seletedYear, setSelectedYear] = useState("2020");

  const handleYearSelection = (selectedyear) => {
    // console.log(selectedyear);
    setSelectedYear(selectedyear);
    // props.onYearChange(selectedyear);
  };
  // const aa = props.items.map(
  //   (e) => {
  //     return (
  //       <ExpenseItem
  //         title={e.title}
  //         amount={e.amount}
  //         date={e.date}
  //       ></ExpenseItem>
  //     );
  //   }
  //   // );
  // );
  // console.log(aa);
  console.log(props.items);

  const filteredexpenses = props.items.filter(
    (e) => e.date.getFullYear() == seletedYear
  );

  let expenseContent = <p>No content found</p>;

  if (filteredexpenses.length > 0) {
    expenseContent = filteredexpenses.map((e) => {
      return (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        ></ExpenseItem>
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={seletedYear}
          onSelectYear={handleYearSelection}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredexpenses}></ExpensesChart>
        {expenseContent}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}
