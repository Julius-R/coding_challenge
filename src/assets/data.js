export const predicates = [
	{
		type: "string",
		name: "User Email",
		dbName: "user_email"
	},
	{
		type: "int",
		name: "Screen Width",
		dbName: "screen_width"
	},
	{
		type: "int",
		name: "Screen Height",
		dbName: "screen_height"
	},
	{
		type: "int",
		name: "# of Visits",
		dbName: "visits"
	},
	{
		type: "string",
		name: "First Name",
		dbName: "user_first_name"
	},
	{
		type: "string",
		name: "Last Name",
		db: "user_last_name"
	},
	{
		type: "int",
		name: "Page Response time(ms)",
		dbName: "page_response"
	},
	{
		type: "string",
		name: "Domain",
		dbName: "domain"
	},
	{
		type: "string",
		name: "Page Path",
		db: "path"
	}
];

export const placeholders = {
	int: 0,
	path: "/pathname",
	domain: "domain.com",
	user_last_name: "Smith",
	user_first_name: "John",
	user_email: "johnsmith@mail.com"
};

export const operators = {
	string: ["equals", "contains", "starts with", "in list"],
	int: ["equals", "between", "greater than", "less than", "in list"]
};
