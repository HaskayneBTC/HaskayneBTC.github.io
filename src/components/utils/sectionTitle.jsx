import React, { Component } from "react";

class SectionTitle extends Component {
	render() {
		const { title, noWhitespaceBefore } = this.props;

		let whitespaceBefore = [];
		if (noWhitespaceBefore === undefined) {
			whitespaceBefore = [<br key={0} />, <br key={1} />];
		}

		return (
			<React.Fragment>
				{whitespaceBefore}
				<br />
				{title && <h1 className="display-6">{title}</h1>}
				<br />
			</React.Fragment>
		);
	}
}

export default SectionTitle;
