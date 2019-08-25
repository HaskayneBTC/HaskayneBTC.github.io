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
				id: "team",
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
			<nav className="navbar navbar-dark bg-dark navbar-expand-md sticky-top">
				<ul className="navbar-nav">{this.renderNavLinks()}</ul>
			</nav>
		);
	}

	renderNavLinks() {
		return this.state.navLinks.map(l => (
			<li className="nav-item" key={l.id}>
				<a className="nav-link" href={"#" + l.id}>
					{l.text}
				</a>
			</li>
		));
	}
}

export default NavBar;
