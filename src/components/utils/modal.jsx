import React, { Component } from "react";
import $ from "jquery";

class Modal extends Component {
	state = {};
	componentDidMount() {
		$(this.modal).modal("show");

		if (this.props.handleHideModal) {
			$(this.modal).on("hidden.bs.modal", this.props.handleHideModal);
		}
	}

	render() {
		const { title } = this.props;
		return (
			<div
				ref={el => {
					this.modal = el;
				}}
				className="modal"
				tabIndex={-1}
				role="dialog"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">{title}</h4>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						{this.renderModalImg()}
						<div
							className="modal-body"
							style={{ fontFamily: "libra_serif_modern" }}
						>
							{this.renderModalText()}
						</div>
						{/*
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
						*/}
					</div>
				</div>
			</div>
		);
	}

	renderModalImg() {
		const { img } = this.props;
		return img ? <img src={img} className="img-cover-md" alt="" /> : null;
	}

	renderModalText() {
		const { subtitle, text } = this.props;
		let output = [];

		// Add subtitle if applicable
		if (subtitle) {
			output.push(
				<h5
					className="text-muted"
					style={{ fontFamily: "libra_serif_modern" }}
				>
					{subtitle}
				</h5>
			);
		}

		// Split text by line breaks
		const lines = text.split("\n").map(line => <p>{line}</p>);

		output.push(<>{lines}</>);

		return output;
	}
}

export default Modal;
