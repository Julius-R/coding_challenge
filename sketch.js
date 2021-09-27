// Idea sketch out for implementation

rows = [
	{
		id: "1",
		predicate: "Sketch 1",
		operator: "starts with",
		value: "Sketch"
	},
	{
		id: "2",
		predicate: "Sketch 1",
		operator: "starts with",
		value: "Sketch"
	},
	{
		id: "3",
		predicate: "Sketch 1",
		operator: "list in",
		value: "Sketch, List, Toys"
	}
];

let query = "";

// loop through the rows and append to the query variable

const listComposer = (operator, val) => {
	if (operator === "list in") {
		return `(${val})`;
	} else {
		return val;
	}
};
rows.forEach((row) => {
	query += `${row.predicate} ${row.operator} ${listComposer(
		row.operator,
		row.value
	)} and `;
});

let la = query.lastIndexOf("and");
query = query.substring(0, la);

console.log(query);

const predicates = [
	{
		type: "string",
		name: "User Email "
	},
	{
		type: "int",
		name: "Screen Width "
	},
	{
		type: "int",
		name: "Screen Height"
	},
	{
		type: "int",
		name: "# of Visits"
	},
	{
		type: "string",
		name: "First Name"
	},
	{
		type: "string",
		name: "Last Name"
	},
	{
		type: "int",
		name: "Page Response time(ms)"
	},
	{
		type: "string",
		name: "Domain"
	},
	{
		type: "string",
		name: "Page Path"
	}
];
const operatorsStrings = ["equals", "contains", "starts with", "in list"];
const operatorsIntegers = [
	"equals",
	"between",
	"greater than",
	"less than",
	"in list"
];

/*
App
    - QueryForm
        - QueryBuilder
        - QuerySubmitter
    - QueryDisplay Holds the end result of the query

 */

// validate if isNumber and alert if not
const validateInput = (e) => {
	let fieldName = e.target.name;
	let value = e.target.value;
	if(isNaN(value)){
		alert(`Value must be a number`);
		setQuery({ ...query, isErrorFree: false });
		return;
	}
	if(!query.value.trim()){
		alert(`You must enter a value`);
		setQuery({ ...query, isErrorFree: false });
		return;
	} 
	setQuery({ ...query, [fieldName]: value });
}

const updateRowValue = () => {
	if(query.isErrorFree){
		updateRow(query.id, query);
	}
	
}