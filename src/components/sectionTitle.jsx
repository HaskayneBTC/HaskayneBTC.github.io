import React, { Component } from "react";

class SectionTitle extends Component {
	render() {
		return (
			<React.Fragment>
				<br />
				<br />
				<br />
				<h1 className="display-6">{this.props.title}</h1>
				<br />
			</React.Fragment>
		);
	}
}

export default SectionTitle;
