import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { state } from "../../mobx/store";
import Query from "./Query";

const QueryBuilder = () => {
	const data = state.rows;
	const [rows, setRow] = useState([]);
	useEffect(() => {
		setRow(data);
	}, [data]);
	return (
		<div>
			{rows.map((row) => (
				<Query key={row.id} row={row} />
			))}
		</div>
	);
};

export default observer(QueryBuilder);
