import React, { Component } from "react";
import Banner from "./components/banner.jsx";
import NavBar from "./components/navbar.jsx";
import Content from "./components/content.jsx";

class App extends Component {
	state = {
		content: {
			team: [
				{
					title: "Co-Presidents",
					members: [
						{
							name: "Justin La",
							roles: ["Co-President"],
							img:
								"https://media.licdn.com/dms/image/C4D03AQFvS8Iz9Kei5w/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=smSvz0NRignevlLajEpfdT5Os7zMxNBa7ylY-r69JmA"
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
							img:
								"https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/70606338_1225165244321655_2178907282299944960_n.jpg?_nc_cat=107&_nc_oc=AQli_TTUPqWU0_sz4FrMZNKi3opQ6clJpqSB169NtGNxHpYyb0zsw44vgqt5nDz--yo&_nc_ht=scontent.fyyc3-1.fna&oh=6075811d80c1958a340d68a350248db0&oe=5E112F73"
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
							img:
								"https://media.licdn.com/dms/image/C5603AQGY_CWR1AHWkw/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=gMXrfrV4KcIez3ZYDqXfcjV4fAhiJAst9tlK8ZF3z6k"
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
							img:
								"https://media.licdn.com/dms/image/C4D03AQHfqTiUWDeDbw/profile-displayphoto-shrink_800_800/0?e=1573084800&v=beta&t=Vc787MLlM724V5aAzhnQD7vEahiY3Qudk9GkDzNCWCY"
						},
						{
							name: "Richard Lee",
							roles: ["Junior Executive", "Web Designer"],
							img:
								"https://media.licdn.com/dms/image/C4D03AQEMtWAmqAebAQ/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=tP8ciLM053nI2iviRKy5ASg9u4ZE_FgtyaYpg4ZQN8M"
						},
						{
							name: "Gordon West",
							roles: ["Junior Executive"],
							img:
								"https://media.licdn.com/dms/image/C5603AQGNlVQxAqEdQg/profile-displayphoto-shrink_800_800/0?e=1574294400&v=beta&t=Hyun_VC3dADQKLSKtWLNxNBm1nFOCoYnqAnAQefcH60"
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
