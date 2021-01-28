import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Stuff from "./Components/Stuff";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Home />
			<About />
			<Stuff />
		</div>
	);
}

export default App;
