import React, { Component } from "react";
import TeamMember from "./teamMember.jsx";
import SectionTitle from "../../utils/sectionTitle.jsx";
import Subsection from "../../utils/subsection.jsx";

class OrganizationTeam extends Component {
	render() {
		return (
			<section id="committee">
				<SectionTitle title="Team" noWhitespaceBefore />
				<Subsection>
					{this.renderRoles(this.props.roles, (id, name) => (
						<h3 key={id} id={id} className="mb-4">
							{name}
						</h3>
					))}
				</Subsection>
			</section>
		);
	}

	/**
	 * Render each team by role
	 */
	renderRoles(category, wrapName) {
		return category.map(elem => this.renderRole(elem, wrapName));
	}

	renderRole(elem, wrapName) {
		let output;
		let plural = "";
		if (!elem.hasOwnProperty("children")) {
			const members = this.renderTeamForRole(elem.id);
			if (members.length !== 1) {
				plural = this.getPlural(elem);
			}

			output = (
				<div className="container">
					<div className="row justify-content-md-center">
						{members}
					</div>
				</div>
			);
		} else {
			plural = this.getPlural(elem);

			// RECURSIVE CALL - render the children
			output = (
				<div className="mx-md-3 mx-lg-4">
					{this.renderRoles(elem.children, (id, name) => (
						<h4 key={id} id={id} className="mb-4">
							{name}
						</h4>
					))}
				</div>
			);
		}

		return (
			<React.Fragment key={"frag" + elem.id}>
				{wrapName(elem.id, elem.name + plural)}
				{output}
			</React.Fragment>
		);
	}

	getPlural(role) {
		return role.pluralRule !== undefined ? role.pluralRule : "s";
	}

	renderTeamForRole(role) {
		let output = this.props.teamMembers
			.filter(elem => elem.roles.includes(role))
			.map(elem => (
				<div key={elem.id} className="col-md-4">
					<TeamMember teamMember={elem} />
				</div>
			));

		if (output.length === 0) {
			output = (
				<p className="text-muted">
					<i>N/A</i>
				</p>
			);
		}

		return output;
	}
}

export default OrganizationTeam;
