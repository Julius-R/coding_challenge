export const predicates = [
	{
		type: "string",
		name: "User Email"
	},
	{
		type: "int",
		name: "Screen Width"
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

export const operators = {
	string: ["equals", "contains", "starts with", "in list"],
	int: ["equals", "between", "greater than", "less than", "in list"]
};
