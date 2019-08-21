import React, { Component } from "react";
import TeamMember from "./teamMember.jsx";
import SectionTitle from "../../utils/sectionTitle.jsx";
import Subsection from "../../utils/subsection.jsx";

class OrganizationTeam extends Component {
	render() {
		return (
			<section id="team">
				<SectionTitle title="Team" noWhitespaceBefore />
				<Subsection>
					<div className="row justify-content-md-center">
						{this.renderMembers(this.props.members)}
					</div>
				</Subsection>
			</section>
		);
	}

	renderMembers(members) {
		return members.map(member => (
			<div key={member.id} className="col-md-4">
				<TeamMember
					name={member.name}
					img={member.img}
					roles={member.roles}
				/>
			</div>
		));
	}
}

export default Team;
