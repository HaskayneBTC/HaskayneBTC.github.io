import React, { Component } from "react";

class Banner extends Component {
	state = {};

	render() {
		// const imgUrl = "images/background1.png";
		const imgUrl =
			"https://onaircode.com/wp-content/uploads/2017/11/Particle-and-Node-Canvas.jpg";
		const heroStyle = {
			borderRadius: 0
		};
		const heroImgStyle = {
			width: "110%",
			right: -20,
			minHeight: 200,
			maxHeight: 200,
			objectFit: "cover",

			backgroundColor: "#122"
		};

		return (
			<div className="card bg-dark text-white" style={heroStyle}>
				<img
					className="card-img"
					src={imgUrl}
					// alt="Business Technology Club"
					style={heroImgStyle}
				/>
				<div className="card-img-overlay">
					<div
						className="container"
						style={{
							position: "absolute",
							bottom: 10
						}}
					>
						<h4 className="display-7">University of Calgary's</h4>
						<h1 className="display-4">Business Technology Club</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;
