import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { state } from "../../mobx/store";
import { addRow, removeRow } from "../../mobx/store";

const QueryDisplay = () => {
	const data = state.rows;
	const [row, setRow] = useState([]);
	useEffect(() => {
		setRow(data);
	}, [data]);
	return (
		<section className="display">
			<button
				onClick={() => {
					addRow();
				}}>
				Add Rows
			</button>
			{data.map((item) => (
				<p key={item.id}>
					{item.predicate},{item.operator}
				</p>
			))}
			<button
				onClick={() => {
					if (data.length === 0) {
						console.log("Nothign to show");
					} else {
						data.forEach((item) =>
							console.log(item.predicate, item.operator)
						);
						console.log("____________________");
					}
				}}>
				Show Rows
			</button>
			<button onClick={() => removeRow(1)}>Delete</button>
			{/* <em>Your Generated SQL Statements goes here: {store.length}</em> */}
		</section>
	);
};

export default observer(QueryDisplay);
