import React, { useState } from "react";
import { addRow, removeRow } from "../../mobx/store";

export default function QueryDisplay({ store }) {
	return (
		<section className="display">
			<button
				onClick={() => {
					addRow({ id: 1, name: "John" });
					addRow({ id: 3, name: "Jhn" });
					console.log(store);
				}}>
				Add Rows
			</button>
			<button
				onClick={() => {
					if (store.length === 0) {
						console.log("Nothign to show");
					} else {
						store.forEach((item) => console.log(item.name));
					}
				}}>
				Show Rows
			</button>
			<button onClick={() => removeRow(1)}>Delete</button>
			{/* <em>Your Generated SQL Statements goes here: {store.length}</em> */}
		</section>
	);
}
