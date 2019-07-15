import React, { Component } from "react";

class Home extends Component {
	state = {};
	render() {
		return (
			<section id="home">
				<br />
				<br />
				<br />
				<div className="container">
					<div className="row">
						<div className="col-5">
							<h1 className="display-4">
								Connecting Innovation With People
							</h1>
							<p className="text-muted">
								Fill me in! A little more about who we are...
							</p>
						</div>
						<div id="animation-col" className="col-7">
							<canvas id="canvas" />
						</div>
					</div>
				</div>
				<canvas id="canvas" />
			</section>
		);
	}
}

export default Home;
