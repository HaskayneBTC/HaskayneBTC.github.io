import React, { Component } from "react";
import Sponsor from "./sponsor";
import SectionTitle from "./utils/sectionTitle";
import Subsection from "./utils/subsection";

class Sponsors extends Component {
	render() {
		return (
			<section id="sponsors">
				<SectionTitle title="Sponsors" />
				<div className="mb-5">
					{this.renderSponsorLevels(this.props.sponsorLevels)}
				</div>
				<Subsection>{this.renderSponsorUs()}</Subsection>
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

	renderSponsorUs() {
		return (
			<React.Fragment>
				<br />
				<br />
				<p className="text-muted">
					Interested in having your company's logo displayed on our
					page, speaking at our events, and supporting us? You can
					sponsor us, starting at $200.
					<br />
					Contact us at haskayneBTC
					<span style={{ display: "none" }}>
						You found our easter egg! Interested in websites? Join
						BTC!
					</span>
					@gmail<span>.com</span>
				</p>
			</React.Fragment>
		);
	}
}

export default Sponsors;
