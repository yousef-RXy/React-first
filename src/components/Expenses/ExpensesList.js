import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <p>No expenses found</p>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((i) => (
				<ExpenseItem
					key={i.id}
					title={i.title}
					amount={i.amount}
					date={i.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
