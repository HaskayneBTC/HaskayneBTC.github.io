import React, { Component } from "react";
import OrganizationTeam from "./organizationTeam.jsx";
import ContactUs from "./contactUs.jsx";
import Page from "../../utils/page.jsx";

class Organization extends Component {
	render() {
		const {
			organizationTeam,
			contactUs,
		} = this.props.data.organizationPage;

		return (
			<Page navLinks={this.props.navLinks}>
				<OrganizationTeam
					teamMembers={organizationTeam.teamMembers}
					roles={organizationTeam.roles}
				/>
				<ContactUs contacts={contactUs.contacts}
				roles={contactUs.roles} />
			</Page>
		);
	}
}

export default Organization;
