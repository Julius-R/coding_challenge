import React, { useState, useEffect } from "react";
import { predicates, operators, placeholders } from "../assets/data";
import { observer } from "mobx-react";
import { updateRow, removeRow, reset } from "../../mobx/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Query = ({ row, numRows }) => {
	const [query, setQuery] = useState({ ...row });
	const [predicateType, setPredicateType] = useState("string");
	const [inputPlaceholder, setInputPlaceholder] = useState(
		placeholders.user_email
	);
	const [operatorList, setOperatorList] = useState(operators[predicateType]);

	const validateInput = (e) => {
		let fieldName = e.target.name;
		let val = e.target.value;
		if (predicateType === "int" && query.operator !== "in list") {
			if (isNaN(val)) {
				setQuery({ ...query, [fieldName]: null });
				alert(`Value must be a number`);
				return;
			}
		}
		if (!val.trim()) {
			alert(`You must enter a value`);
			setQuery({ ...query, [fieldName]: "" });
			return;
		}
		setQuery({ ...query, [fieldName]: val });
	};

	const updateRowValue = () => {
		updateRow(query.id, query);
	};

	const checkOperator = () => {
		let passCondition = ["in list", "less than", "greater than", "between"];
		if (passCondition.indexOf(query.operator) !== -1) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<section className="query">
			<FontAwesomeIcon
				icon={faTimes}
				className="queryClose"
				onClick={() => {
					if (numRows >= 2) {
						removeRow(query.id);
					} else {
						reset();
					}
				}}
			/>
			<select
				name="predicate"
				className={checkOperator() ? "small-box" : ""}
				defaultValue={query.predicate.dbName}
				onBlur={() => {
					updateRow(query.id, query);
				}}
				onChange={(e) => {
					let [type, name, db] = e.target.value.split(",");
					setPredicateType(type);
					setOperatorList(operators[type]);
					if (type === "int") {
						setInputPlaceholder(placeholders.int);
					} else {
						setInputPlaceholder(placeholders[db]);
					}
					setQuery({ ...query, predicate: db, value: "" });
				}}>
				{predicates.map((predicate) => (
					<option
						key={predicate.name}
						value={Object.values(predicate)}>
						{predicate.name}
					</option>
				))}
			</select>
			{checkOperator() && <p className="bonusText">is</p>}
			<select
				name="operator"
				className={checkOperator() ? "small-box" : ""}
				onBlur={() => {
					updateRow(query.id, query);
				}}
				onChange={(e) => {
					setQuery({ ...query, operator: e.target.value });
				}}>
				{operatorList.map((operator) => (
					<option key={operator} value={operator}>
						{operator}
					</option>
				))}
			</select>
			{query.operator !== "between" ? (
				<input
					name="value"
					value={query.value}
					placeholder={inputPlaceholder}
					onChange={validateInput}
					onBlur={() => {
						updateRowValue();
					}}
				/>
			) : (
				<>
					<input
						type="text"
						name="value"
						placeholder={inputPlaceholder}
						className={checkOperator() ? "small-box" : ""}
						onChange={validateInput}
						onBlur={() => {
							updateRowValue();
						}}
					/>
					<p className="bonusText">and</p>
					<input
						type="text"
						name="valueTwo"
						placeholder={inputPlaceholder}
						className={checkOperator() ? "small-box" : ""}
						onChange={validateInput}
						onBlur={() => {
							updateRowValue();
						}}
					/>
				</>
			)}
		</section>
	);
};

export default observer(Query);
