import { observable, action } from "mobx";
import { v4 as uuidv4 } from "uuid"; //  For randomizing ID

// Initial row to be displayed
const defaultState = [
	{
		id: uuidv4(),
		predicate: "user_email",
		operator: "equals",
		value: "",
		valueTwo: null
	}
];

export const state = observable({
	rows: defaultState,
	query: ""
});

export const addRow = action(() => {
	return (state.rows = state.rows.concat({
		id: uuidv4(),
		predicate: "user_email",
		operator: "equals",
		value: "",
		valueTwo: null
	}));
});

export const removeRow = action((id) => {
	state.rows = state.rows.filter((row) => row.id !== id);
});

export const updateRow = action((id, updatedRow) => {
	state.rows = state.rows.map((row) => (row.id === id ? updatedRow : row));
});

export const reset = action(() => {
	state.rows = [];
	addRow();
	state.query = "";
});

const clearEndDuplicate = (query, valToRemove) => {
	let termRemoval = query.lastIndexOf(valToRemove);
	return query.substring(0, termRemoval);
};

let checkIfInteger = (val) => {
	if (isNaN(val)) {
		return val;
	} else {
		return parseInt(val);
	}
};

const listComposer = (pred, operator, val, val2) => {
	switch (operator) {
		case "in list":
			console.log(typeof val);
			if (!val.includes(",")) {
				let trimmed = val.trim();
				let arr = trimmed.split(/[ ,]+/);
				let cleaned = "";
				arr.forEach((item) => {
					cleaned += `'${item}', `;
				});
				clearEndDuplicate(cleaned, ",");
				return `${pred} IN (${cleaned})`;
			} else {
				return `${pred} IN (${val})`;
			}
		case "between":
			return `${pred} BETWEEN ${val} AND ${val2}`;
		case "contains":
			return `CONTAINS(${pred},'${val}')`;
		case "starts with":
			return `${pred} LIKE '${val}%'`;
		case "equals":
			return `${pred} = '${val}'`;
		case "greater than":
			return `${pred} > ${val}`;
		case "less than":
			return `${pred} < ${val}`;
	}
};

const washData = (data) => {
	let input = new Set(data);
	let output = Array.from(input);
	return output;
};

const buildSearchColumns = () => {
	let res = "";
	let uniquePreds = state.rows.map((row) => row.predicate);
	let washedData = washData(uniquePreds);
	washedData.forEach((row) => {
		res += `${row}, `;
	});
	return res;
};

const buildSearchCriteria = () => {
	let res = "";
	state.rows.forEach((row) => {
		res += ` ${listComposer(
			row.predicate,
			row.operator,
			row.value,
			row.valueTwo
		)} and `;
	});

	return clearEndDuplicate(res, "and");
};

export const buildSearchQuery = action(() => {
	let greenLight = true;
	state.rows.forEach((row) => {
		if (!row.value.trim()) {
			greenLight = false;
		}
		if (row.operator === "between" && row.valueTwo === null) {
			greenLight = false;
		}
	});
	if (greenLight) {
		let res = `SELECT ${buildSearchColumns()} FROM users WHERE ${buildSearchCriteria()};`;
		return (state.query = res);
	} else {
		return (state.query =
			"Please ensure all info is correct before running again");
	}
});
