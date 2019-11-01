import React, { Component } from "react";
import ModalContainer from "./utils/modalContainer";

class Project extends Component {
	render() {
		const { title, text, subtitle, img } = this.props;

		const cardImgStyle = {
			width: "100%",
			height: "15vw",
			objectFit: "cover"
		};

		return (
			<ModalContainer
				modal={{
					title: title,
					text: text,
					img: img,
					subtitle: subtitle
				}}
			>
				{onShowModal => (
					<div className="card mb-4 border-0" onClick={onShowModal}>
						<img
							className="card-img-top"
							src={img}
							style={cardImgStyle}
							alt=""
						/>
						<div className="card-body">
							<h4 className="card-title mb-1">{title}</h4>
							<p className="card-text">{subtitle}</p>
						</div>
					</div>
				)}
			</ModalContainer>
		);
	}
}

export default Project;
