import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Project extends Component {
	render() {
		const cardImgStyle = {
			width: "100%",
			height: "15vw",
			objectFit: "cover"
		};

		return (
			<Card border="0" className="mb-4">
				<Card.Img
					variant="top"
					src={this.props.project.img}
					style={cardImgStyle}
				/>
				<Card.Body>
					<Card.Title>{this.props.project.title}</Card.Title>
					<Card.Text>{this.props.project.text}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">
						Last updated 3 mins ago
					</small>
				</Card.Footer>
			</Card>
		);
	}
}

export default Project;
