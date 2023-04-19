import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const saveExpensDataHandler = (enteredExpensData) => {
		const expenseData = {
			...enteredExpensData,
			id: Math.random().toString,
		};
		props.onSaveExpensData(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpensData={saveExpensDataHandler} />
		</div>
	);
};

export default NewExpense;
