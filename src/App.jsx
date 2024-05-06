import { useState } from "react";

import React from "react";
import { quiz } from "./assets/data/questions";
function App() {
	const { questions } = quiz;
	const [activequestion, setactivequestion] = useState(0);
	const { question, options } = questions[activequestion];
	return (
		<>
			<h1>Quiz App</h1>
			<h2>{question}</h2>
			<ul>
				{options.map((option) => (
					<li>{option}</li>
				))}
			</ul>
		</>
	);
}

export default App;
