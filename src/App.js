import React from "react";
import { observer } from "mobx-react";
import { state } from "../mobx/store";
import QueryDisplay from "./components/QueryDisplay";

const App = () => {
	return (
		<>
			<QueryDisplay store={state.rows} />
		</>
	);
};

export default observer(App);
