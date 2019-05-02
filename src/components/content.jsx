import React, { Component } from "react";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import Bios from "./bios.jsx";

class Content extends Component {
	state = {};
	render() {
		return (
			<div id="content" className="container">
				<Home />
				<Projects />
				<Bios />
			</div>
		);
	}
}

export default Content;
