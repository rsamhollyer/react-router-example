import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Stuff from "./Components/Stuff";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
	const [testData, setData] = useState({});
	const [counter, setCounter] = useState({});

	const getApi = async () => {
		const response = await axios.get("/api");
		setData(response.data);
	};

	useEffect(() => {
		getApi();
	}, []);

	// const getValue = async () => {
	// 	const resp = await axios.get("/api/counter");
	// 	setCounter(resp.data);
	// };
	// const incValue = async () => {
	// 	const resp = await axios.post("/api/counter");
	// 	setCounter(resp.data);
	// };
	// const decrValue = async () => {
	// 	const resp = await axios.put("/api/counter");
	// 	setCounter(resp.data);
	// };
	// const resetValue = async () => {
	// 	const resp = await axios.delete("/api/counter");
	// 	setCounter(resp.data);
	// };

	const axiosFnc = async (method) => {
		const resp = await axios[method]("/api/counter");
		setCounter(resp.data);
	};

	return (
		<Router>
			<div className="App">
				<header>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/stuff">Stuff</Link>
				</header>

				<Switch>
					<Route path="/" exact>
						<Home testData={testData} />
						<p>Data is : {counter.value ? counter.value : 0}</p>
						<button onClick={() => axiosFnc("get")}>Get Value</button>
						<button onClick={() => axiosFnc("post")}>+</button>
						<button onClick={() => axiosFnc("put")}>-</button>
						<button onClick={() => axiosFnc("delete")}>Reset</button>
					</Route>

					<Route path="/about">
						<About />
					</Route>

					<Route path="//stuff">
						<Stuff />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
