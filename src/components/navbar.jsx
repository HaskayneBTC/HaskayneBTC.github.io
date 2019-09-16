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
			<nav className="navbar navbar-dark bg-dark navbar-expand-md sticky-top btc-bg-grey">
				<a className="navbar-brand mb-0 h1" href="#">
					<img
						src="images/btcLogoGrey.png"
						width={30}
						height={30}
						alt="Business Technology Club"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
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
