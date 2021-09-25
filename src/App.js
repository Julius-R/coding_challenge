import React from "react";
import { observer } from "mobx-react";
import { state } from "../mobx/store";
import QueryDisplay from "./components/QueryDisplay";
import QueryForm from "./components/QueryForm";

export default function App() {
	return (
		<>
			<QueryForm />
			<QueryDisplay store={state.rows} />
		</>
	);
}
