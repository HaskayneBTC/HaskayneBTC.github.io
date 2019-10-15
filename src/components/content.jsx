import React, { Component } from "react";
import Home from "./home.jsx";
import Events from "./events.jsx";
import Projects from "./projects.jsx";
import Sponsors from "./sponsors.jsx";
import Team from "./team.jsx";

class Content extends Component {
	state = {};

	render() {
		const { events, projects, team, sponsorLevels } = this.props;
		return (
			<div id="content" className="container">
				<Home />
				<Events events={events} />
				<Projects projects={projects} />
				<Team team={team} />
				<Sponsors sponsorLevels={sponsorLevels} />
			</div>
		);
	}
}

export default Content;
