import React, { Component } from "react";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import Bios from "./bios.jsx";
import Sponsors from "./sponsors.jsx";

class Content extends Component {
	state = {};
	render() {
		return (
			<div id="content" className="container">
				<Home />
				<Projects />
				<Bios />
				<Sponsors />
			</div>
		);
	}
}

export default Content;
