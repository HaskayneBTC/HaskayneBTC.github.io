import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
	state = {};
	render() {
		return (
			<section id="home">
				<br />
				<br />
				<br />
				<Container>
					<Row>
						<Col md={5}>
							<h1 className="display-4">
								Connecting Innovation With People
							</h1>
							<p className="text-muted">
								Fill me in! A little more about who we are...
							</p>
						</Col>
						<Col id="animation-col" md={7}>
							<canvas id="canvas" />
						</Col>
					</Row>
				</Container>
				<canvas id="canvas" />
			</section>
		);
	}
}

export default Home;
