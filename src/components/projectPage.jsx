import React, { Component } from "react";

class ProjectPage extends Component {
	state = {};
	render() {
		const { title, text, registration } = this.props;

		return (
			<div>
				<div className="container-fluid" />
				<div>
					<h1>{title}</h1>
					<p>{text}</p>
					<br />
					{this.renderRegisterButton(registration)}
				</div>
			</div>
		);
	}

	renderRegisterButton(registration) {
		if (!registration) {
			return; // There is no associated registration information. Return nothing
		}

		return (
			<a className="btn btn-primary" href={registration.link}>
				Register
			</a>
		);
	}
}

export default ProjectPage;
