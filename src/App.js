import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
	{
		id: "DE",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(1900, 7, 14),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses}></Expenses>
		</div>
	);
};

export default App;
