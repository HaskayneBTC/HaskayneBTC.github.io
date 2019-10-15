import React, { Component } from "react";
import $ from "jquery";
import Banner from "./components/banner.jsx";
import NavBar from "./components/navbar.jsx";
import Content from "./components/content.jsx";

class App extends Component {
	state = {
		googleSheetsUrl: "https://script.google.com/macros/s/AKfycbwpUHnD1aE6Y7D_v06S2O27Crt_Y6Pq3-3X5v6iAVtSlVhksHY/exec",
		content: {
			projects: [
				{
					title: "Project 1",
					img:
						"https://www.corporatecomplianceinsights.com/wp-content/uploads/2018/09/data-analytics.jpg",
					text: "A brief blurb about what this is"
				},
				{
					title: "Project 2",
					img:
						"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
					text: "A brief blurb about what this is"
				},
				{
					title: "Project 3",
					img:
						"https://www.entrepreneurship-campus.org/wp-content/uploads/2016/06/weather-balloon4.jpg",
					text: "A brief blurb about what this is"
				},
				{
					title: "Project 4",
					img:
						"https://www.todocanada.ca/wp-content/uploads/eveningincalgary-e1459307181708.jpg",
					text: "A brief blurb about what this is"
				},
				{
					title: "Project 5",
					img:
						"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
					text: "A brief blurb about what this is"
				},
				{
					title: "Project 6",
					img:
						"http://boc.ie/clipart/post/i-0207b%20refinery%20-%20night.jpg",
					text: "A brief blurb about what this is"
				}
			],
			team: [
				{
					title: "Co-Presidents",
					members: [
						{
							name: "Justin La",
							roles: ["Co-President"],
							img: "images/justin.jpeg"
						},
						{
							name: "Minnie Thai",
							img:
								"https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/27073279_10156155946672769_8830866854187591661_n.jpg?_nc_cat=110&_nc_oc=AQmv41dTt9GJzLpxmsbBACyWhBong0n3v05QLCc3Z086zZ35MpNuLuCUiaGlyzy2b7s&_nc_ht=scontent.fyyc3-1.fna&oh=8099bdbafae73f6f105c686b8d1eb59f&oe=5DD09990",
							roles: ["Co-President"]
						}
					]
				},
				{
					title: "Vice Presidents",
					members: [
						{
							name: "Arjie Arcos",
							roles: ["VP Marketing"],
							img: "images/arjie.jpeg"
						},
						{
							name: "Sarah LaFramboise",
							roles: ["VP Corporate Relations"],
							img:
								"https://media.licdn.com/dms/image/C4E03AQFsmZnooW874Q/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=qFXCrEQEzdSF4eL889LkMZobF0-x22kvbM8tPmFn9aA"
						},
						{
							name: "Collins Mbithi",
							roles: ["VP Projects"],
							img:
								"https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/23795400_1618471771506315_3132535409838851708_n.jpg?_nc_cat=104&_nc_oc=AQmKKxmu6i7fL3hsbP-z5pOCgQ-sDOMO5fuhdAgO5tSPLicEYW5XP4BVtdLdLl50730&_nc_ht=scontent.fyyc3-1.fna&oh=408862cc2cf0e36ce3203cad30d47e0c&oe=5E06AC5E"
						},
						{
							name: "Leslie Nguyen",
							roles: ["VP Events"],
							img: "images/leslie.jpeg"
						},

						{
							name: "Jordan Tran",
							roles: ["VP Operations & Finance"],
							img:
								"https://media.licdn.com/dms/image/C4E03AQHV0vJ62KVPBw/profile-displayphoto-shrink_800_800/0?e=1573084800&v=beta&t=rZl8Se_rlLux0hR9GYMEUnbqZyCoV4V1yMafy3CjsWU"
						}
					]
				},
				{
					title: "Junior Executives",
					members: [
						{
							name: "Kareen Hallak",
							roles: ["Junior Executive"],
							img: "images/kareen.jpeg"
						},
						{
							name: "Richard Lee",
							roles: ["Junior Executive", "Web Designer"],
							img: "images/richard.jpeg"
						}
					]
				}
			],
			sponsorLevels: [
				{
					level: "Gold",
					imgHeight: 150,
					sponsors: [
						{
							name: "Haskayne School of Business",
							img:
								"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Haskayne_School_of_Business.svg/375px-Haskayne_School_of_Business.svg.png",
							link: "http://haskayne.ucalgary.ca"
						}
					]
				},
				{
					level: "Silver",
					imgHeight: 100,
					sponsors: [
						{
							name: "Schulich School of Engineering",
							img:
								"https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png",
							link: "http://schulich.ucalgary.ca"
						},
						{
							name: "University of Calgary",
							img:
								"https://symbiont2018.files.wordpress.com/2018/10/university-of-calgary-logo-transparent-uc-horz-rgb-11.png?w=1400",
							link: "https://www.ucalgary.ca/"
						}
					]
				},
				{
					level: "General",
					imgHeight: 75,
					sponsors: []
				}
			]
		}
	};

	componentDidMount() {
		const { googleSheetsUrl } = this.state;

		$.get(googleSheetsUrl, data => {
			console.log(data); // FIXME delete
			const projects = data.content.filter(entry => entry.type.toLowerCase() === "project");
			const events = data.content.filter(entry => entry.type.toLowerCase() === "event");
			this.setState({content: {...this.state.content, projects}});
		});
	}


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
