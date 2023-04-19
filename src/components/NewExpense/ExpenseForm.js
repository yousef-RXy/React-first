import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const [enteredAmount, setEnteredAmount] = useState("");

	const AmountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const [enteredDate, setEnteredDate] = useState("");

	const DateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpensData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={AmountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2025-01-01"
						value={enteredDate}
						onChange={DateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
