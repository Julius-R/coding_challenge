import { observable, action } from "mobx";

export const state = observable({ rows: [] });

export const addRow = action((row) => {
	state.rows.push(row);
});

export const removeRow = action((id) => {
	state.rows = state.rows.filter((row) => row.id !== id);
	console.log(state.rows);
});

// updateRow(id, updatedRow) {
// 	this.rows = this.rows.map((row) => (row.id === id ? updatedRod : row));
// }

// displayRowLength() {
// 	console.log(this.rows.length);
// }
