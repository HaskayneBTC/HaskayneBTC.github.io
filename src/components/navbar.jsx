import React, { Component } from "react";

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
			// FIXME delete commented code
			// <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
			// 	<Nav>{this.renderNavLinks()}</Nav>
			// </Navbar>
			<nav className="navbar navbar-dark bg-dark expand-lg sticky-top">
				<ul className="navbar-nav">{this.renderNavLinks()}</ul>
			</nav>
		);
	}

	renderNavLinks() {
		return this.state.navLinks.map(l => (
			// FIXME delete commented code
			// <Nav.Link key={l.id} href={"#" + l.id}>
			// 	{l.text}
			// </Nav.Link>
			<li className="nav-item" key={l.id}>
				<a className="nav-link" href={"#" + l.id}>
					{l.text}
				</a>
			</li>
		));
	}
}

export default NavBar;
