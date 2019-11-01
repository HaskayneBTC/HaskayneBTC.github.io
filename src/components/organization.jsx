import React, { Component } from "react";
import Team from "./team.jsx";
import ContactUs from "./contactUs.jsx";
import Page from "../../utils/page.jsx";

class Organization extends Component {
	render() {
		const {
			team,
			contactUs
		} = this.props.data.organizationPage;

		return (
			<Page navLinks={this.props.navLinks}>
				<Team
					teamMembers={team.teamMembers}
					roles={team.roles}
				/>
				<ContactUs
					contacts={contactUs.contacts}
					roles={contactUs.roles}
				/>
			</Page>
		);
	}
}

export default Organization;
