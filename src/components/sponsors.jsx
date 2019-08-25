import React, { Component } from "react";
import Sponsor from "./sponsor";
import SectionTitle from "./utils/sectionTitle";

class Sponsors extends Component {
	state = {
		sponsors: [
			{
				name: "Schulich School of Engineering",
				img:
					"https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png",
				link: "http://schulich.ucalgary.ca",
				tier: "gold"
			},
			{
				name: "Haskayne School of Business",
				img:
					"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Haskayne_School_of_Business.svg/375px-Haskayne_School_of_Business.svg.png",
				link: "http://haskayne.ucalgary.ca",
				tier: "silver"
			},
			{
				name: "University of Calgary",
				img:
					"https://symbiont2018.files.wordpress.com/2018/10/university-of-calgary-logo-transparent-uc-horz-rgb-11.png?w=1400",
				link: "https://www.ucalgary.ca/",
				tier: "silver"
			}
		]
	};
	render() {
		return (
			<section id="sponsors">
				<SectionTitle title="Sponsors" />
				<div className="text-center">
					<h2>Gold</h2>
					<br />
					{this.renderSponsors("gold", 150)}
					<br />
					<br />
					<h2>Silver</h2>
					<br />
					{this.renderSponsors("silver")}
					<br />
					<br />
				</div>
			</section>
		);
	}

	renderSponsors(tier, height = 100) {
		const { sponsors } = this.state;
		if (sponsors.length === 0) {
			return <h5 className="text-muted">Become a sponsor today!</h5>;
		}

		return this.state.sponsors
			.filter(s => s.tier === tier)
			.map(s => <Sponsor sponsor={s} height={height} />);
	}
}

export default Sponsors;
