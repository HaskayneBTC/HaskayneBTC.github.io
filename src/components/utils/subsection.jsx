import React, { Component } from "react";

class Subsection extends Component {
	render() {
		return (
			<div id={this.props.id} className="mx-md-3 mx-lg-4">
				{this.props.children}
			</div>
		);
	}
}

export default Subsection;
