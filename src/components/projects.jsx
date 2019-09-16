import React, { Component } from "react";
import Project from "./project";
import SectionTitle from "./utils/sectionTitle.jsx";

class Projects extends Component {
	render() {
		return (
			<section id="projects">
				<SectionTitle title="Projects" />
				<div className="card-deck">
					{this.renderProjects(this.props.projects)}
				</div>
			</section>
		);
	}

	renderProjects(projects) {
		return projects.flatMap((p, index) => {
			let projectEntry = [<Project key={p.title} project={p} />];

			// Add responsive breaks for cards
			if (index % 2 === 1) {
				projectEntry.push(
					<div
						key={"break2-" + index}
						className="w-100 d-none d-sm-block d-md-none"
					/>
				);
			}

			if (index % 3 === 2) {
				projectEntry.push(
					<div
						key={"break3-" + index}
						className="w-100 d-none d-md-block d-lg-block d-xl-block"
					/>
				);
			}

			return projectEntry;
		});
	}
}

export default Projects;
