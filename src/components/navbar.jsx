import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
	state = {
		navLinks: [
			{
				id: "home",
				text: "Home"
			},
			{
				id: "projects",
				text: "Projects"
			},
			{
				id: "bios",
				text: "Meet the Team"
			},
			{
				id: "sponsors",
				text: "Sponsors"
			}
		]
	};
	render() {
		return (
			<Navbar bg="dark" expand="lg" sticky="top" variant="dark">
				<Nav>{this.renderNavLinks()}</Nav>
			</Navbar>
		);
	}

	renderNavLinks() {
		return this.state.navLinks.map(l => (
			<Nav.Link key={l.id} href={"#" + l.id}>
				{l.text}
			</Nav.Link>
		));
	}
}

export default NavBar;
