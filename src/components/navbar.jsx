import React, { Component } from "react";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark">
				<a className="navbar-item active" href="#">
					Home
				</a>
			</nav>
		);
	}
}

export default NavBar;
