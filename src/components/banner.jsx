import React, { Component } from "react";

class Banner extends Component {
	state = {};

	render() {
		const imgUrl = "images/background1.png";
		const jumbotronStyle = {
			backgroundImage: "url(" + imgUrl + ")"
		};

		// TODO Add image
		return (
			<div className="jumbotron jumbotron-fluid">
				{/* <img src="images/background1.png" alt="Business Technology Club" /> */}
				<div className="container" style={jumbotronStyle}>
					<h1 className="display-4">Business Technology Club</h1>
				</div>
			</div>
		);
	}
}

export default Banner;
