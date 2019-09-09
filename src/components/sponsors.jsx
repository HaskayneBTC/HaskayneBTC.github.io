import React, { Component } from "react";
import Sponsor from "./sponsor";
import SectionTitle from "./utils/sectionTitle";

class Sponsors extends Component {
	state = {
		sponsorLevels: [
			{
				level: "Gold",
				imgHeight: 150,
				sponsors: [
					{
						name: "Haskayne School of Business",
						img:
							"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Haskayne_School_of_Business.svg/375px-Haskayne_School_of_Business.svg.png",
						link: "http://haskayne.ucalgary.ca"
					}
				]
			},
			{
				level: "Silver",
				imgHeight: 100,
				sponsors: [
					{
						name: "Schulich School of Engineering",
						img:
							"https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png",
						link: "http://schulich.ucalgary.ca"
					},
					{
						name: "University of Calgary",
						img:
							"https://symbiont2018.files.wordpress.com/2018/10/university-of-calgary-logo-transparent-uc-horz-rgb-11.png?w=1400",
						link: "https://www.ucalgary.ca/"
					}
				]
			}
		]
	};
	render() {
		return (
			<section id="sponsors">
				<SectionTitle title="Sponsors" />
				{this.renderSponsorLevels(this.state.sponsorLevels)}
			</section>
		);
	}

	// renderSponsors(tier, height = 100) {
	// 	const { sponsors } = this.state;
	// 	if (sponsors.length === 0) {
	// 		return <h5 className="text-muted">Become a sponsor today!</h5>;
	// 	}

	// 	return this.state.sponsors.map(s => (
	// 		<Sponsor sponsor={s} height={imgHeight} />
	// 	));
	// }

	renderSponsorLevels(sponsorLevels) {
		return sponsorLevels.map(sponsorLevel => {
			const { level, imgHeight, sponsors } = sponsorLevel;

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
