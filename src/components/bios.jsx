import React, { Component } from "react";
import Bio from "./bio.jsx";

class Bios extends Component {
	state = {
		bios: [
			{
				id: 1,
				name: "Minnie Thai",
				titles: ["Co-President"],
				img:
					"https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/27073279_10156155946672769_8830866854187591661_n.jpg?_nc_cat=110&_nc_ht=scontent-sea1-1.xx&oh=ce4ab90fd2cba34062e09fbe563e5819&oe=5D326590",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},
			{
				id: 2,
				name: "Justin La",
				titles: ["Co-President"],
				img:
					"https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/12813913_10204281807284067_7877006205315663152_n.jpg?_nc_cat=100&_nc_ht=scontent-sea1-1.xx&oh=0a102b9a053ef3b02cf4ae9650619b4f&oe=5D67D047",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			}
		]
	};
	render() {
		return (
			<section id="bios">
				<h1 className="display-6">Meet the Team</h1>
				{this.state.bios
					.map(b => <Bio key={b.id} bio={b} />)
					.reduce((accu, elem) => {
						return accu === null
							? [elem]
							: [...accu, <hr key={"hr" + elem.id} />, elem];
					}, null)}
			</section>
		);
	}
}

export default Bios;
