import React, { Component } from "react";

class Email extends Component {
	handleClick = e => {
		e.preventDefault();
		window.location.href = "mailto:" + this.props.email;
	};

	render() {
		let emailParts = this.props.email.split("@");
		emailParts.splice(
			1,
			0,
			<span key={emailParts[0] + "-filler"} style={{ display: "none" }}>
				Bot-be-gone
			</span>,
			"@"
		);

		return (
			<a href="index.html" onClick={this.handleClick}>
				{emailParts}
			</a>
		);
	}
}

export default Email;
