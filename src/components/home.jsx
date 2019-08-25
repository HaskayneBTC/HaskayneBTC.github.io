import React, { Component } from "react";
import SectionTitle from "./utils/sectionTitle";

class Home extends Component {
	state = {};
	render() {
		return (
			<section id="home">
				<SectionTitle />
				<div className="container">
					<h1 className="display-4">Our Vision</h1>
					<p className="splash-text text-muted">
						<em>
							To be at the forefront of cultivating talented
							Business Technology students through experience and
							professional growth.
						</em>
					</p>
					<br />
					<h2>Our Mission</h2>
					<blockquote className="blockquote text-muted">
						The Haskayne Business Technology Club aims to enhance
						the learning experience of undergraduate students
						through real-life assignments that exploit information
						technology to solve business problems, and through
						facilitating networking events with like-minded students
						and business professionals in these fields.
					</blockquote>
				</div>
			</section>
		);
	}
}

export default Home;
