import React, { Component } from "react";

class NavBar extends Component {
	state = {
		navItems: [
			{
				id: "home",
				text: "Home"
			},
			{
				id: "bios",
				text: "Meet the Team"
			}
		]
	};
	render() {
		return (
			<nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
				<ul class="navbar-nav">{this.renderNavItems()}</ul>
			</nav>
		);
	}

	renderNavItems() {
		return this.state.navItems.map(i => (
			<li key={i.id} className="nav-item">
				<a className="nav-link" href={"#" + i.id}>
					{i.text}
				</a>
			</li>
		));
	}
}

export default NavBar;
