import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class Home extends Component {
	state = {};
	render() {
		return (
			<section id="home">
				<Container>
					<h1 className="display-4">
						Connecting Innovation With People
					</h1>
					<p className="text-muted">
						Fill me in! A little more about who we are...
					</p>
				</Container>
			</section>
		);
	}
}

export default Home;
