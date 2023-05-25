import "./App.css";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skill from "./Components/Skill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Home />
				<About data-aos="fade-right" />
				<Skill data-aos="fade-right" />
				<Projects />
				<Contacts />
			</Router>
		</div>
	);
}

export default App;
