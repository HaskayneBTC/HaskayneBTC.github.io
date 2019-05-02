import React, { Component } from "react";
import "./App.css";
import Banner from "./components/banner.jsx";
import NavBar from "./components/navbar.jsx";
import Content from "./components/content.jsx";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Banner />
				<NavBar />
				<Content />
			</React.Fragment>
		);
	}
}

export default App;
