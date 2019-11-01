import React, { Component } from "react";
import Modal from "./modal";

/**
 * This class represents something that causes a modal to appear
 * Example: This class can have a button as a child. When the child's
 * 	onClick is assigned to handleShowModal, a modal will appear when the child is clicked
 */
class ModalContainer extends Component {
	state = {
		view: {
			showModal: false
		}
	};

	handleShowModal = () => {
		this.setState({ view: { showModal: true } });
	};

	handleHideModal = () => {
		this.setState({ view: { showModal: false } });
	};

	render() {
		const { modal } = this.props;

		return (
			<React.Fragment>
				{this.props.children(
					this.handleShowModal,
					this.handleHideModal
				)}
				{this.state.view.showModal && (
					<Modal
						handleHideModal={this.handleHideModal}
						title={modal.title}
						text={modal.text}
						img={modal.img}
						subtitle={modal.subtitle}
					/>
				)}
			</React.Fragment>
		);
	}
}

export default ModalContainer;
