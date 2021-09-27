import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { state } from "../../mobx/store";

const QueryDisplay = () => {
	return (
		<section className="queryDisplay">
			<em>Your Generated SQL Statements goes here: {state.query}</em>
		</section>
	);
};

export default observer(QueryDisplay);
