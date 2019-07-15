import React, { Component } from "react";

class SectionTitle extends Component {
	render() {
		let whitespaceBefore = [];
		if (this.props.noWhitespaceBefore === undefined) {
			whitespaceBefore = [<br key={0} />, <br key={1} />];
		}

		return (
			<React.Fragment>
				{whitespaceBefore}
				<br />
				<h1 className="display-6">{this.props.title}</h1>
				<br />
			</React.Fragment>
		);
	}
}

export default SectionTitle;
