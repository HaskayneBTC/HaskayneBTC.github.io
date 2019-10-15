import React, { Component } from "react";
import Event from "./event";
import SectionTitle from "./utils/sectionTitle.jsx";

class Events extends Component {
	render() {
		return (
			<section id="events">
				<SectionTitle title="Events" />
				<div className="card-deck">
					{this.renderEvents(this.props.events)}
				</div>
			</section>
		);
	}

	renderEvents(events) {
		return events.flatMap((event, index) => {
			let eventEntry = [<Event key={event.title} {...event} />];

			// Add responsive breaks for cards
			if (index % 2 === 1) {
				eventEntry.push(
					<div
						key={"break2-" + index}
						className="w-100 d-none d-sm-block d-md-none"
					/>
				);
			}

			if (index % 3 === 2) {
				eventEntry.push(
					<div
						key={"break3-" + index}
						className="w-100 d-none d-md-block d-lg-block d-xl-block"
					/>
				);
			}

			return eventEntry;
		});
	}
}

export default Events;
