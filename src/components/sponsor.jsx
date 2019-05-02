import React, { Component } from "react";

class Sponsor extends Component {
	state = {};
	render() {
		const { sponsor } = this.props;

		let imgStyle = {
			height: this.props.height ? this.props.height : 100,
			width: "auto"
		};
		if (this.props.width) {
			imgStyle["width"] = this.props.width;
		}

		return (
			<div className="m-4 d-inline">
				<a href={sponsor.link}>
					<img
						src={sponsor.img}
						alt={sponsor.name}
						style={imgStyle}
					/>
				</a>
			</div>
		);
	}
}

export default Sponsor;
