import React, { Component } from "react";
import Banner from "./components/banner.jsx";
import NavBar from "./components/navbar.jsx";
import Content from "./components/content.jsx";

class App extends Component {
	state = {
		content: {
			members: [
				{
					name: "Minnie Thai",
					img:
						"https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/27073279_10156155946672769_8830866854187591661_n.jpg?_nc_cat=110&_nc_oc=AQmv41dTt9GJzLpxmsbBACyWhBong0n3v05QLCc3Z086zZ35MpNuLuCUiaGlyzy2b7s&_nc_ht=scontent.fyyc3-1.fna&oh=8099bdbafae73f6f105c686b8d1eb59f&oe=5DD09990",
					roles: ["Co-president"]
				},
				{
					id: 2,
					name: "Justin La",
					roles: ["Co-president"],
					img:
						"https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/12813913_10204281807284067_7877006205315663152_n.jpg?_nc_cat=100&_nc_ht=scontent-sea1-1.xx&oh=0a102b9a053ef3b02cf4ae9650619b4f&oe=5D67D047"
				},
				{
					id: 3,
					name: "Richard Lee",
					roles: ["Junior Executive", "Web Designer"],
					img:
						"https://i.pinimg.com/originals/df/1e/0d/df1e0d138153689cc975a2a7d699fa20.jpg"
				}
			]
		}
	};

	render() {
		return (
			<React.Fragment>
				<Banner />
				<NavBar />
				<Content {...this.state.content} />
			</React.Fragment>
		);
	}
}

export default App;
