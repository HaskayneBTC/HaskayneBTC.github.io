import React, { Component } from "react";
import Project from "./project";
import SectionTitle from "./sectionTitle.jsx";

class Projects extends Component {
	state = {
		projects: [
			{
				title: "Project 1",
				img:
					"https://www.corporatecomplianceinsights.com/wp-content/uploads/2018/09/data-analytics.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 2",
				img:
					"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 3",
				img:
					"https://www.entrepreneurship-campus.org/wp-content/uploads/2016/06/weather-balloon4.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 4",
				img:
					"https://www.todocanada.ca/wp-content/uploads/eveningincalgary-e1459307181708.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 5",
				img:
					"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
				text: "A brief blurb about what this is"
			},
			{
				title: "Project 6",
				img:
					"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
				text: "A brief blurb about what this is"
			}
		]
	};

	render() {
		return (
			<section id="projects">
				<SectionTitle title="Projects" />
				<div className="card-deck">{this.renderProjects()}</div>
			</section>
		);
	}

	renderProjects() {
		return this.state.projects.map(function(p, index) {
			let projectEntry = [<Project key={p.name} project={p} />];

			// Add responsive breaks for cards
			if (index % 2 === 1) {
				projectEntry.push(
					<div class="w-100 d-none d-sm-block d-md-none" />
				);
			}
			if (index % 3 === 2) {
				projectEntry.push(
					<div class="w-100 d-none d-md-block d-lg-block d-xl-block" />
				);
			}

			return projectEntry;
		});
	}
}

export default Projects;
