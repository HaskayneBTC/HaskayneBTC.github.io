import React, { Component } from "react";
import SectionTitle from "./utils/sectionTitle";

class Home extends Component {
	state = {};
	render() {
		return (
			<section id="home">
				{/* Using blank SectionTitle to control space formatting */}
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
					<br />
					<h1 className="display-4">Our Mission</h1>
					<div className="row">
						<div className="col-md">
							<blockquote className="blockquote text-muted my-2">
								The Haskayne Business Technology Club aims to
								enhance the learning experience of undergraduate
								students through real-life assignments that
								exploit information technology to solve business
								problems, and through facilitating networking
								events with like-minded students and business
								professionals in these fields.
							</blockquote>
						</div>
						<div className="col-md-6">
							<img
								src="https://cdn1.analytics.hbs.edu/content/0e06dff0f9384e3fba3e332ac40100df/BizAnalytics_vs_Intelligence-Hero.jpg"
								class="img-cover-lg"
								alt="Business Analytics"
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Home;
