import React from "react";
import QueryBuilder from "./QueryBuilder";
import QuerySubmitter from "./QuerySubmitter";

export default function QueryForm() {
	return (
		<div className="queryForm">
			<p className="big-text">Search for Sessions </p>
			<QueryBuilder />
			<QuerySubmitter />
		</div>
	);
}
