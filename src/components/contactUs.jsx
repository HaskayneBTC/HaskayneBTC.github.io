import React, { Component } from "react";
import SectionTitle from "../../utils/sectionTitle.jsx";
import Email from "../../utils/email.jsx";
import "../../../App.css";

class ContactUs extends Component {
	state = {
		// contacts: [
		//     {
		//         id: 1,
		//         name: "Mehmet Kaya",
		//         role: "Academic Track Chair",
		//         worksAt: "Firat University",
		//         country: "Turkey",
		//         email: "kaya@firat.edu.tr"
		//     },
		//     {
		//         id: 2,
		//         name: "Mohammad Moshirpour",
		//         role: "Industry Track Chair",
		//         worksAt: "University of Calgary",
		//         country: "Canada",
		//         email: "mmoshirp@ucalgary.ca"
		//     },
		//     {
		//         id: 3,
		//         name: "Sepideh Afkhami Goli",
		//         role: "Thesis Track Chair",
		//         worksAt: "University of Calgary",
		//         country: "Canada",
		//         email: "sepideh.afkhamigoli@ucalgary.ca"
		//     },
		//     {
		//         id: 4,
		//         name: "Yasaman Amannejad",
		//         role: "Thesis Track Chair",
		//         worksAt: "Mount Royal University",
		//         country: "Canada",
		//         email: "yamannejad@mtroyal.ca"
		//     },
		//     {
		//         id: 5,
		//         name: "Tansel Ozyer",
		//         role: "Web Chair",
		//         worksAt: "TOBB University",
		//         country: "Turkey",
		//         email: "ozyer@etu.edu.tr"
		//     }
		// ]
	};
	render() {
		return (
			<section id="contact-us" className="end-of-page-height">
				<SectionTitle title="Contact Us" />
				<div
					className="container p-4"
					style={{ backgroundColor: "lightgrey" }}
				>
					<p className="lead">
						Have a question or a comment? Send an email to one of
						the following:
					</p>

					{this.renderContacts(this.getContactsByRole())}
				</div>
			</section>
		);
	}

	getContactsByRole() {
		let contactsByRole = new Map();
		// this.props.contacts.forEach(c => {
		// 	const contact = { ...c };

		// 	contact.roles.forEach(role => {
		// 		let roleContacts = contactsByRole.get(role); // Get all the contacts with this role
		// 		if (roleContacts === undefined) {
		// 			roleContacts = [contact];
		// 		} else {
		// 			roleContacts.push(contact); // Add this contact to the already-existing entry
		// 		}

		// 		contactsByRole.set(contact.role, roleContacts);
		// 	});
		// });

		this.props.roles.forEach(role => {
			contactsByRole.set(
				role,
				this.props.contacts.filter(contact =>
					contact.roles.includes(role.id)
				)
			);
		});

		return contactsByRole;
	}

	renderContacts(contactsByRole) {
		let output = [];
		contactsByRole.forEach((value, key) => {
			output.push(
				<small key={key.id}>
					<span>
						<b>{key.name}</b>
					</span>
					<br />
					{//Map out each contact
					value.map(contact => (
						<div key={contact.id} className="d-block mb-1 ml-4">
							<span>{contact.name}</span>
							<span className="text-muted">
								{" "}
								&ndash; {contact.worksAt}, {contact.country}
								<br />
								<Email email={contact.email} />
							</span>
						</div>
					))}
				</small>
			);
		});

		return <React.Fragment>{output}</React.Fragment>;
	}
}

export default ContactUs;
