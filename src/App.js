import "./App.css";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Preloader from "./Components/Preloader";
import Projects from "./Components/Projects";
import Skill from "./Components/Skill";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<>
			<Preloader />
			<div className="App">
				<Router>
					<Header></Header>

					<Home />

					<About />
					<Skill />
					<Projects />
					<Contacts />
				</Router>
			</div>
		</>
	);
}

export default App;
