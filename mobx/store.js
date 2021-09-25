import { observable, action } from "mobx";
import { v4 as uuidv4 } from "uuid"; //  For randomizing ID

// Initial row to be displayed
const defaultState = [
	{
		id: uuidv4(),
		predicate: "User Email",
		operator: "equals",
		value: "",
		valueTwo: null
	}
];

export const state = observable({ rows: defaultState });

export const addRow = action(() => {
	return (state.rows = state.rows.concat({
		id: uuidv4(),
		predicate: "User Email",
		operator: "equals",
		value: "",
		valueTwo: null
	}));
});

export const removeRow = action((id) => {
	state.rows = state.rows.filter((row) => row.id !== id);
});

export const updateRow = action((id, updatedRow) => {
	console.log(
		updatedRow.predicate,
		updatedRow.operator,
		updatedRow.value,
		updatedRow.valueTwo
	);
	state.rows = state.rows.map((row) => (row.id === id ? updatedRow : row));
});

export const reset = action(() => {
	state.rows = defaultState;
});
