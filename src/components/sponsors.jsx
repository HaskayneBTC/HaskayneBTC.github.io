import React, { Component } from "react";
import Sponsor from "./sponsor";
import SectionTitle from "./utils/sectionTitle";

class Sponsors extends Component {
	render() {
		return (
			<section id="sponsors">
				<SectionTitle title="Sponsors" />
				{this.renderSponsorLevels(this.props.sponsorLevels)}
			</section>
		);
	}

	renderSponsorLevels(sponsorLevels) {
		return sponsorLevels.map(sponsorLevel => {
			const { level, imgHeight, sponsors } = sponsorLevel;

			// Return nothing if this sponsor level has no sponsors
			if (!sponsors || !sponsors.length) {
				return null;
			}

			return (
				<div key={level} className="mb-3">
					<h3 className="mb-3">{level}</h3>
					<div className="row justify-content-md-center">
						{sponsors.map(sponsor =>
							this.renderSponsor(sponsor, imgHeight)
						)}
					</div>
				</div>
			);
		});
	}

	renderSponsor(sponsor, imgHeight) {
		const { name, img, link } = sponsor;
		return (
			<div key={name} className="col-md-4">
				<Sponsor img={img} link={link} imgHeight={imgHeight} />
			</div>
		);
	}
}

export default Sponsors;
