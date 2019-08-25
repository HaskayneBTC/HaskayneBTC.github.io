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
				<a class="navbar-brand mb-0 h1" href="#">
					BTC
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav">{this.renderNavLinks()}</ul>
				</div>
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
