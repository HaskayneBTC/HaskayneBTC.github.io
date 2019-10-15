import React, { Component } from "react";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import Sponsors from "./sponsors.jsx";
import Team from "./team.jsx";

class Content extends Component {
	state = {};

	render() {
		const { projects, team, sponsorLevels } = this.props;
		return (
			<div id="content" className="container">
				<Home />
				<Projects projects={projects} />
				<Team team={team} />
				<Sponsors sponsorLevels={sponsorLevels} />
			</div>
		);
	}
}

export default Content;
