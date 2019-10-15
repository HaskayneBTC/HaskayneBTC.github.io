import React, { Component } from "react";
import $ from "jquery";

class Modal extends Component {
	state = {};
	componentDidMount() {
		$(this.modal).modal("show");

		if (this.props.handleHideModal) {
			$(this.modal).on(
				"hidden.bs.modal",
				this.props.handleHideModal
			);
		}
	}

	render() {
		return (
			<div ref={el => {this.modal = el}} className="modal" tabIndex={-1} role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">
								!!! FIXME Project title here
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>FIXME Project description goes here</p>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
