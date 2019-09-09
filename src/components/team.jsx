import React, { Component } from "react";
import TeamMember from "./teamMember.jsx";
import SectionTitle from "./utils/sectionTitle.jsx";
import Subsection from "./utils/subsection.jsx";

class Team extends Component {
	render() {
		return (
			<section id="team">
				<SectionTitle title="Meet the Team" />
				<Subsection>
					{this.renderMemberGroups(this.props.team)}
				</Subsection>
			</section>
		);
	}

	renderMemberGroups(memberGroups) {
		return memberGroups.map((memberGroup, index) => (
			<React.Fragment key={index}>
				{memberGroup.title && (
					<h3 className="mb-3">{memberGroup.title}</h3>
				)}
				<div className="row justify-content-md-center">
					{this.renderMembers(memberGroup.members)}
				</div>
			</React.Fragment>
		));
	}

	renderMembers(members) {
		return members.map(member => (
			<div key={member.name} className="col-md-4">
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
