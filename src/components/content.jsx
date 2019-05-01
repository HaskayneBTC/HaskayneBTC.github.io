import React, { Component } from "react";
import Home from "./home.jsx";
import Bios from "./bios.jsx";

class Content extends Component {
	state = {};
	render() {
		return (
			<div id="content" className="container">
				<Home />
				<Bios />
			</div>
		);
	}
}

export default Content;
