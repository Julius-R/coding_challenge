import React from "react";
import QueryDisplay from "./components/QueryDisplay";
import QueryForm from "./components/QueryForm";

export default function App() {
	return (
		<main className="main">
			<section className="container">
				<QueryForm />
				<QueryDisplay />
			</section>
		</main>
	);
}
