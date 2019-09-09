import React, { Component } from "react";

class Sponsor extends Component {
	state = {};
	render() {
		const { name, img, link, imgHeight } = this.props;

		// let imgStyle = {
		// 	height: this.props.height ? this.props.height : 100,
		// 	width: "auto"
		// };
		// if (this.props.width) {
		// 	imgStyle["width"] = this.props.width;
		// }

		return (
			<div className="m-4 d-inline">
				<a href={link}>
					<img
						src={img}
						alt={name}
						className="sponsor-img"
						style={{ height: imgHeight }}
					/>
				</a>
			</div>
		);
	}
}

export default Sponsor;
