import React, { Component } from "react";

class Project extends Component {
	render() {
		const cardImgStyle = {
			width: "100%",
			height: "15vw",
			objectFit: "cover"
		};

		return (
			<div className="card mb-4 border-0">
				<img
					className="card-img-top"
					src={this.props.project.img}
					style={cardImgStyle}
					alt=""
				/>
				<div className="card-body">
					<h4 className="card-title mb-1">
						{this.props.project.title}
					</h4>
					<p className="card-text">{this.props.project.shortText}</p>
				</div>
			</div>
		);
	}
}

export default Project;
