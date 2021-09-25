import React from "react";
import QueryBuilder from "./QueryBuilder";
import QuerySubmitter from "./QuerySubmitter";

export default function QueryForm() {
	return (
		<div>
			Query Form
			<QueryBuilder />
			<QuerySubmitter />
		</div>
	);
}
