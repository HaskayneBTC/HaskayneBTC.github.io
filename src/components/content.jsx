import React, { Component } from "react";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import Sponsors from "./sponsors.jsx";
import Team from "./team.jsx";

class Content extends Component {
	state = {};
	render() {
		const { members } = this.props;
		return (
			<div id="content" className="container">
				<Home />
				<Projects />
				<Team members={members} />
				<Sponsors />
			</div>
		);
	}
}

export default Content;
