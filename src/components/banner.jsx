import React, { Component } from "react";

class Banner extends Component {
	state = {};

	render() {
		const imgUrl = "images/background1.jpg";
		// const imgUrl = "https://onaircode.com/wp-content/uploads/2017/11/Particle-and-Node-Canvas.jpg";
		const heroStyle = {
			maxWidth: "100%",
			maxHeight: "20vh"
		};
		const heroImgStyle = {
			overflow: "hidden",
			objectFit: "cover",

			backgroundColor: "#122" // Cool dark grey
		};

		return (
			<div
				className="card bg-dark text-white rounded-0"
				style={heroStyle}
			>
				<img
					className="card-img"
					src={imgUrl}
					alt=""
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
