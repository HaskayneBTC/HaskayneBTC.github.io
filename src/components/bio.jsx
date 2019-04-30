import React, { Component } from "react";

class Bio extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<img
							className="img-fluid"
							src={this.props.bio.img}
							alt=""
						/>
					</div>
					<div className="col-lg-8">
						<h3>
							{this.props.bio.name}
							{this.renderTitles()}
						</h3>
						<p>{this.props.bio.text}</p>
					</div>
				</div>
			</div>
		);
	}

	renderTitles() {
		const { titles } = this.props.bio;
		if (titles.length < 1) {
			return "";
		}

		return (
			<small class="text-muted">
				&nbsp;-&nbsp;
				{titles.reduce((accu, elem) => {
					return accu === null ? [elem] : [...accu, ", ", elem];
				}, null)}
			</small>
		);
	}
}

export default Bio;
