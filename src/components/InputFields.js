import React, { useState } from "react";

export default function InputFields({ fieldNumber }) {
	const [value, setValue] = useState("");
	const [dualValOne, setDualValOne] = useState("");
	const [dualValTwo, setDualValTwo] = useState("");

	const updateValues = (e) => {
		console.log(e.target.name);
		switch (e.target.name) {
			case "solo":
				setValue(e.target.value);
				return;
			case "valueOne":
				setDualValOne(e.target.value);
				return;
			case "valueTwo":
				setDualValTwo(e.target.value);
				return;
		}
	};
	return (
		<>
			{fieldNumber === 1 ? (
				<input
					type="text"
					name="valueOne"
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
		</>
	);
}
