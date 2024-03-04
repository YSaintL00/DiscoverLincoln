import React, { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import OrgCard from "@/components/OrgCard";
import Link from "next/link";
import calculateAverageRating from "@/util/calculateAverageRating";

export default function itinerary() {
	// Manually construct events list with objects
	// Simulate response from API

	// change to pull from local storage
	// const orgIds = [6];

	// fetch events from strapi
	// fetch orgs from strapi

	const [events, setEvents] = useState([]);
	const [organizations, setOrganizations] = useState([]);

	function printPage() {
		window.print();
	}

	// fetch events
	useEffect(() => {

		if (localStorage.getItem("itinerary") == null) {
			localStorage.setItem(
				"itinerary",
				JSON.stringify({ events: [], organizations: [] })
			);
		}
		const eventIds = JSON.parse(localStorage.getItem("itinerary")).events;
		const orgIds = JSON.parse(localStorage.getItem("itinerary")).organizations;

		console.log(eventIds);

		eventIds.forEach((id) => {
			fetch(
				`https://strapi.discoverlincoln-c9.civiconnect.net/api/events/${id}?populate=*`
			)
				.then((res) => res.json())
				.then((eventData) => {

					setEvents((events) => [
						...events,
						{ id: eventData.data.id, ...eventData.data.attributes },
					]);
				});
		});

		orgIds.forEach((id) => {
			fetch(
				`https://strapi.discoverlincoln-c9.civiconnect.net/api/organizations/${id}?populate=*`
			)
				.then((res) => res.json())
				.then((orgData) => {

					setOrganizations((organizations) => [
						...organizations,
						{ id: orgData.data.id, ...orgData.data.attributes, rating: calculateAverageRating(orgData.data.attributes.reviews.data) },
					]);
				});
		});
	}, []);

	return (
		<>
			<div id="itinerary-page" className="my-24">
				<div className="overall">
					<div className="background">
						<div className="itinerary-info">
							<h1 className="header mb-4">Your Itinerary</h1>
							<p className="body mb-4">
								Browse through our latest catalog and don't forget to check out
								our latest{" "}
								<Link href="/events">
									<span>events</span>
								</Link>{" "}
								and stay up to date
							</p>
							<button className="print-button" onClick={printPage}>
								Download/Print
							</button>
							<div className="max-w-[50vw] h-full inline-flex flex-col min-h-[60vh]">

								{events.length === 0 && organizations.length === 0 && (
									<p className="pt-8 text-center w-full font-roboto text-green">
										No events or organizations added to itinerary.
									</p>
								)}

								{events.length > 0 && (
									<p className="my-4 font-roboto-slab-bold text-xl">Events</p>
								)}
								{events.map((event) => (
									<EventCard
										key={event.id}
										id={event.id}
										name={event.title}
										street={event.street}
										city={event.city}
										state={event.state}
										startDate={event.startDate}
										endDate={event.endDate}
										price={event.price}
										description={event.description}
										imageUrl={`https://strapi.discoverlincoln-c9.civiconnect.net${event.coverImage.data.attributes.url}`}
									/>
								))}
								{organizations.length > 0 && (
									<p className="my-4 font-roboto-slab-bold text-xl">
										Places to Visit
									</p>
								)}
								{organizations.map((org) => (
									<OrgCard
										id={org.id}
										name={org.name}
										street={org.street}
										city={org.city}
										state={org.state}
										rating={org.rating}
										dollarRating={org.dollarRating}
										description={org.description}
										imageUrl={`https://strapi.discoverlincoln-c9.civiconnect.net${org.featureImage.data.attributes.url}`}
									/>
								))}
								{/* {orgs.map((event) => (
									<EventCard
										key={event.id}
										id={event.id}
										name={event.name}
										street={event.street}
										city={event.city}
										state={event.state}
										startDate={event.startDate}
										endDate={event.endDate}
										price={event.price}
										description={event.description}
										imageUrl={event.imageUrl}
									/>
								))}
                <OrgCard
                    id={"Fusion1"}
                    name={"Fusion Latina"}
                    street={"5041 King St Unit 3"}
                    city={"Beamsville"}
                    state={"Ontario"}
                    rating={4}
                    dollarRating={1}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod. Blandit cursus risus at ultrices mi tempus imperdiet. Diam ut venenatis tellus in metus. Nisi scelerisque eu ultrices vitae auctor eu."
                    }
                    imageUrl={
                      "https://images.unsplash.com/photo-1609950547346-a4f431435b2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
