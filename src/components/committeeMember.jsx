import React, { Component } from "react";
import NoPhoto from "./no-photo.png";

class TeamMember extends Component {
	render() {
		const { teamMember: member } = this.props;
		const imgWidth =
			this.props.imgWidth !== undefined ? this.props.imgWidth : 150;

		const imgHeight =
			this.props.imgHeight !== undefined
				? this.props.imgHeight
				: imgWidth * 1.2;

		const imgStyle = {
			width: imgWidth,
			height: imgHeight,
			objectFit: "cover"
		};

		return (
			<div className="container">
				<img
					src={member.img !== undefined ? member.img : NoPhoto}
					className="rounded mx-auto d-block"
					style={imgStyle}
					alt=""
				/>
				<br />
				<div className="text-center">
					<h5>{member.name}</h5>
					<p className="text-muted">
						{member.worksAt}, {member.country}
					</p>
					{/* Extra vertical padding */}
					<br />
				</div>
			</div>
		);
	}
}

export default TeamMember;
