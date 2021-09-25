import React, { useState } from "react";
import { predicates, operators } from "../assets/data";
import { observer } from "mobx-react";
import { updateRow } from "../../mobx/store";

const Query = ({ row }) => {
	const [query, setQuery] = useState({ ...row });
	const [predicateType, setPredicateType] = useState("string");
	const [operatorList, setOperatorList] = useState(operators[predicateType]);
	const updateValues = (e) => {
		console.log(e.target.name);
		switch (e.target.name) {
			case "solo":
				setQuery({ ...query, value: e.target.value });
				return;
			case "valueOne":
				setQuery({ ...query, value: e.target.value });
				return;
			case "valueTwo":
				setQuery({ ...query, valueTwo: e.target.value });
				return;
		}
	};
	return (
		<section>
			<select
				name="predicate"
				onBlur={() => {
					updateRow(query.id, query);
				}}
				onChange={(event) => {
					let [type, name] = event.target.value.split(",");
					setPredicateType(type);
					setOperatorList(operators[type]);
					setQuery({ ...query, predicate: name });
				}}>
				{predicates.map((predicate) => (
					<option
						key={predicate.name}
						value={Object.values(predicate)}>
						{predicate.name}
					</option>
				))}
			</select>
			<select
				name="operator"
				onBlur={() => {
					updateRow(query.id, query);
				}}
				onChange={(event) => {
					setQuery({ ...query, operator: event.target.value });
				}}>
				{operatorList.map((operator) => (
					<option key={operator} value={operator}>
						{operator}
					</option>
				))}
			</select>
			{query.operator !== "between" ? (
				<input
					type="text"
					name="solo"
					onChange={updateValues}
					onBlur={() => {
						updateRow(query.id, query);
					}}
				/>
			) : (
				<>
					<input
						type="text"
						name="valueOne"
						onChange={updateValues}
						onBlur={() => {
							updateRow(query.id, query);
						}}
					/>
					And
					<input
						type="text"
						name="valueTwo"
						onChange={updateValues}
						onBlur={() => {
							updateRow(query.id, query);
						}}
					/>
				</>
			)}
		</section>
	);
};

export default observer(Query);
