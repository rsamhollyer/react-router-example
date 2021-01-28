import React from "react";

export default function Home(props) {
	const { testData } = props;
	return (
		<>
			<h1>{testData.status}</h1>
			<h2>{testData.isCool ? "So COOOOOOLLL" : "TOTALLY NOT KEWL BRO"}</h2>

			{Object.keys(testData).map((key) => {
				return typeof testData[key] !== "boolean" ? (
					<p key={testData[key]}>{testData[key]}</p>
				) : (
					<p key={1}>SO COOL</p>
				);
			})}
		</>
	);
}
