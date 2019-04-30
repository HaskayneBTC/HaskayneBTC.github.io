import React, { Component } from "react";

class Banner extends Component {
	state = {};

	render() {
		// const imgUrl = "images/background1.png";
		const imgUrl =
			"https://onaircode.com/wp-content/uploads/2017/11/Particle-and-Node-Canvas.jpg";
		const jumbotronStyle = {
			// backgroundImage: "url(" + imgUrl + ")"
		};

		// TODO Add image
		return (
			<div className="card bg-dark text-white">
				<img
					className="card-img"
					src={imgUrl}
					alt="Business Technology Club"
					style={{ maxHeight: 200, objectFit: "cover" }}
				/>
				<div className="card-img-overlay">
					<div className="container" style={jumbotronStyle}>
						<h1 className="display-4">Business Technology Club</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;
