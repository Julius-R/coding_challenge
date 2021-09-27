import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { addRow, state } from "../../mobx/store";
import Query from "./Query";

const QueryBuilder = () => {
	const data = state.rows;
	const [rows, setRow] = useState([]);
	useEffect(() => {
		setRow(data);
	}, [state.rows]);
	return (
		<div className="queryBuilder">
			<div className="queries">
				{rows.map((row) => (
					<Query key={row.id} numRows={rows.length} row={row} />
				))}
			</div>
			<button
				onClick={() => {
					addRow();
				}}
				className="queryAdder btn-blue">
				And
			</button>
		</div>
	);
};

export default observer(QueryBuilder);
