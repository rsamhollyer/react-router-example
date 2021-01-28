import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Stuff from "./Components/Stuff";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
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
						<Home />
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
