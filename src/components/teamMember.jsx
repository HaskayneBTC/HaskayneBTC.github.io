import React, { Component } from "react";
import NoPhoto from "./no-photo.png";

class TeamMember extends Component {
	render() {
		const { name, img, roles } = this.props;
		return (
			<div className="container">
				<img
					src={img !== undefined ? img : NoPhoto}
					className="rounded mx-auto d-block member-img"
					alt=""
				/>
				<br />
				<div className="text-center">
					<h5>{name}</h5>
					<p className="text-muted">{this.renderRoles(roles)}</p>
					{/* Extra vertical padding */}
					<br />
				</div>
			</div>
		);
	}

	/**
	 * Join the roles of the member together as a single string
	 * @param {Array.<string>} roles An array of strings with each member's roles
	 * @return {string} The roles as a string joined together by a comma
	 */
	renderRoles(roles) {
		return roles.join(", ");

		// Alternative version for use if a role includes HTML in it
		// return roles.reduce((accu, role) => {
		// 	return accu === null ? [role] : [...accu, ", ", role];
		// }, null);
	}
}

export default TeamMember;
