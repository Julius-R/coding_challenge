import { observable, action } from "mobx";

export const state = observable({ rows: [] });

export const addRow = action((row) => {
	state.rows = state.rows.concat(row);
});

export const removeRow = action((id) => {
	state.rows = state.rows.filter((row) => row.id !== id);
});

export const updateRow = action((id, updatedRow) => {
	state.rows = state.rows.map((row) => (row.id === id ? updatedRod : row));
});
