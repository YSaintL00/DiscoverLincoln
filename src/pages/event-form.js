import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const requiredAsterisk = (
	<Image
		alt="Required Answer Asterisk"
		src="/asterisk.svg"
		width="6"
		height="7"
	/>
);


export default function PublicEventCreationForm() {
  const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	function handleFileChange(event) {
		const name = event.target.name;
		setInputs((values) => ({ ...values, [name]: event.target.files }));
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(inputs);

		const formData = new FormData();

		formData.append("data", JSON.stringify(inputs));
		formData.append("files.coverImage", inputs.featuredImg[0]);
		// [...field.photo.files].forEach(file => console.log(file));

		[...inputs.gallery].forEach((file) => {
			formData.append(`files.images`, file, file.name);
		});

		const res = await fetch(
			"https://strapi.discoverlincoln-c9.civiconnect.net/api/events",
			{
				method: "POST",
				body: formData,
			}
		);

		console.log(res);
		toast.success("Form Submitted");
	};

	return (
		<>
			<div>
				<Toaster />
			</div>

			<div className="pageFormat mt-24" id="dashboard">
				<form onSubmit={handleSubmit}>
					<div className="form">
						<h1 className="title">Event Creation Form</h1>

						<div className="inRow">
							<div>
								<div className="icon-text">
									<label htmlFor="firstName">First name:</label>
									{requiredAsterisk}
								</div>
								<input
									className="textboxStyles"
									type="text"
									id="firstName"
									name="firstName"
									value={inputs.firstName || ""}
									onChange={handleChange}
									placeholder="Enter your first name"
									size="30"
									required
								/>
							</div>

							<div>
								<div className="icon-text">
									<label htmlFor="lastName">Last name:</label>
									{requiredAsterisk}
								</div>
								<input
									className="textboxStyles"
									type="text"
									id="lastName"
									name="lastName"
									value={inputs.lastName || ""}
									onChange={handleChange}
									placeholder="Enter your last name"
									size="30"
									required
								/>
							</div>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="email">Email:</label>
								{requiredAsterisk}
							</div>
							<input
								className="textboxStyles"
								type="email"
								id="email"
								name="email"
								value={inputs.email || ""}
								onChange={handleChange}
								placeholder="Enter email address"
								size="30"
								required
							/>
						</div>

						<div>
							<label htmlFor="webLink">Website Link:</label>
							<br></br>
							<input
								className="textboxStyles"
								type="url"
								id="webLink"
								name="webLink"
								value={inputs.webLink || ""}
								onChange={handleChange}
								placeholder="Website Link"
								size="98"
							/>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="eventName">Event Name:</label>
								{requiredAsterisk}
							</div>
							<input
								className="textboxStyles"
								type="text"
								id="eventName"
								name="title"
								value={inputs.title || ""}
								onChange={handleChange}
								placeholder="Enter event name"
								size="30"
								required
							/>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="eventDescription">Event Description:</label>

								{requiredAsterisk}
							</div>

							<input
								className="space"
								type="text"
								element
								id="eventDescription"
								name="description"
								value={inputs.description || ""}
								onChange={handleChange}
								placeholder="Add a description of the event..."
								size="98"
								required
							/>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="eventCategories">Event Categories:</label>
								{requiredAsterisk}
							</div>
							<input
								className="space"
								type="text"
								id="eventCategories"
								name="eventCategories"
								value={inputs.eventCategories || ""}
								onChange={handleChange}
								placeholder="Add event categories..."
								size="98"
								required
							/>
						</div>

						<div className="inRow">
							<div>
								<div className="icon-text">
									<label htmlFor="startDate">Start Date:</label>
									{requiredAsterisk}
								</div>
								<input
									className="textboxStyles"
									type="datetime-local"
									id="startDate"
									name="startDate"
									value={inputs.startDate || ""}
									onChange={handleChange}
									required
								/>
							</div>

							<div>
								<div className="icon-text">
									<label htmlFor="eDate">End Date:</label>
									{requiredAsterisk}
								</div>
								<input
									className="textboxStyles"
									type="datetime-local"
									id="endDate"
									name="endDate"
									value={inputs.endDate || ""}
									onChange={handleChange}
									required
								/>
							</div>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="state">State:</label>
								{requiredAsterisk}
							</div>
							<input
								className="textboxStyles"
								type="text"
								id="state"
								name="state"
								value={inputs.state || ""}
								onChange={handleChange}
								placeholder="Enter state of the event"
								size="30"
								required
							/>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="city">City:</label>
								{requiredAsterisk}
							</div>
							<input
								className="textboxStyles"
								type="text"
								id="city"
								name="city"
								value={inputs.city || ""}
								onChange={handleChange}
								placeholder="Enter city of the event"
								size="30"
								required
							/>
						</div>
						<div>
							<div className="icon-text">
								<label htmlFor="street">Street:</label>
								{requiredAsterisk}
							</div>
							<input
								className="textboxStyles"
								type="text"
								id="street"
								name="street"
								value={inputs.street || ""}
								onChange={handleChange}
								placeholder="Enter street of the event"
								size="30"
								required
							/>
						</div>
						<div className="inRow">
							<div>
								<div className="icon-text">
									<label htmlFor="street">Latitude:</label>
									{requiredAsterisk}
								</div>
								<input
									className="textboxStyles"
									type="text"
									id="latitude"
									name="latitude"
									value={inputs.latitude || ""}
									onChange={handleChange}
									placeholder="Enter street of the event"
									size="30"
									required
								/>
							</div>
							<div>
								<div className="icon-text">
									<label htmlFor="street">Longitude:</label>
									{requiredAsterisk}
								</div>
								<input
									className="textboxStyles"
									type="text"
									id="longitude"
									name="longitude"
									value={inputs.longitude || ""}
									onChange={handleChange}
									placeholder="Enter street of the event"
									size="30"
									required
								/>
							</div>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="ticketPrice">Ticket Price ($):</label>
								{requiredAsterisk}
							</div>
							<input
								className="textboxStyles"
								type="text"
								id="ticketPrice"
								name="price"
								value={inputs.price || ""}
								onChange={handleChange}
								placeholder="Enter ticket price"
								required
							/>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="regLink">Registration Link:</label>
								{requiredAsterisk}
							</div>
							<input
								className="textboxStyles"
								type="url"
								id="regLink"
								name="regLink"
								value={inputs.regLink || ""}
								onChange={handleChange}
								placeholder="Registration Link"
								size="98"
								required
							/>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="featuredImg">Featured Image:</label>
								{requiredAsterisk}
							</div>
							<div className="insertImage">
								<h1>Insert featured image here</h1>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="75"
									height="75"
									viewBox="0 0 75 75"
									fill="none"
								>
									<path
										d="M65.625 11.7188C66.9141 11.7188 67.9688 12.7734 67.9688 14.0625V60.9082L67.2363 59.9561L47.3145 34.1748C46.6553 33.3105 45.6152 32.8125 44.5312 32.8125C43.4473 32.8125 42.4219 33.3105 41.748 34.1748L29.5898 49.9072L25.1221 43.6523C24.4629 42.7295 23.4082 42.1875 22.2656 42.1875C21.123 42.1875 20.0684 42.7295 19.4092 43.667L7.69043 60.0732L7.03125 60.9814V60.9375V14.0625C7.03125 12.7734 8.08594 11.7188 9.375 11.7188H65.625ZM9.375 4.6875C4.2041 4.6875 0 8.8916 0 14.0625V60.9375C0 66.1084 4.2041 70.3125 9.375 70.3125H65.625C70.7959 70.3125 75 66.1084 75 60.9375V14.0625C75 8.8916 70.7959 4.6875 65.625 4.6875H9.375ZM21.0938 32.8125C22.0171 32.8125 22.9314 32.6306 23.7845 32.2773C24.6376 31.9239 25.4127 31.406 26.0656 30.7531C26.7185 30.1002 27.2364 29.3251 27.5898 28.472C27.9431 27.6189 28.125 26.7046 28.125 25.7812C28.125 24.8579 27.9431 23.9436 27.5898 23.0905C27.2364 22.2374 26.7185 21.4623 26.0656 20.8094C25.4127 20.1565 24.6376 19.6386 23.7845 19.2852C22.9314 18.9319 22.0171 18.75 21.0938 18.75C20.1704 18.75 19.2561 18.9319 18.403 19.2852C17.5499 19.6386 16.7748 20.1565 16.1219 20.8094C15.469 21.4623 14.9511 22.2374 14.5977 23.0905C14.2444 23.9436 14.0625 24.8579 14.0625 25.7812C14.0625 26.7046 14.2444 27.6189 14.5977 28.472C14.9511 29.3251 15.469 30.1002 16.1219 30.7531C16.7748 31.406 17.5499 31.9239 18.403 32.2773C19.2561 32.6306 20.1704 32.8125 21.0938 32.8125Z"
										fill="#A3A3A3"
									/>
								</svg>
								<input
									type="file"
									id="featuredImg"
									name="featuredImg"
									onChange={handleFileChange}
									required
								/>
							</div>
						</div>

						<div>
							<div className="icon-text">
								<label htmlFor="gallery">Gallery:</label>
								{requiredAsterisk}
							</div>
							<div className="insertImage">
								<h1>Insert images for gallery here</h1>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="75"
									height="75"
									viewBox="0 0 75 75"
									fill="none"
								>
									<path
										d="M65.625 11.7188C66.9141 11.7188 67.9688 12.7734 67.9688 14.0625V60.9082L67.2363 59.9561L47.3145 34.1748C46.6553 33.3105 45.6152 32.8125 44.5312 32.8125C43.4473 32.8125 42.4219 33.3105 41.748 34.1748L29.5898 49.9072L25.1221 43.6523C24.4629 42.7295 23.4082 42.1875 22.2656 42.1875C21.123 42.1875 20.0684 42.7295 19.4092 43.667L7.69043 60.0732L7.03125 60.9814V60.9375V14.0625C7.03125 12.7734 8.08594 11.7188 9.375 11.7188H65.625ZM9.375 4.6875C4.2041 4.6875 0 8.8916 0 14.0625V60.9375C0 66.1084 4.2041 70.3125 9.375 70.3125H65.625C70.7959 70.3125 75 66.1084 75 60.9375V14.0625C75 8.8916 70.7959 4.6875 65.625 4.6875H9.375ZM21.0938 32.8125C22.0171 32.8125 22.9314 32.6306 23.7845 32.2773C24.6376 31.9239 25.4127 31.406 26.0656 30.7531C26.7185 30.1002 27.2364 29.3251 27.5898 28.472C27.9431 27.6189 28.125 26.7046 28.125 25.7812C28.125 24.8579 27.9431 23.9436 27.5898 23.0905C27.2364 22.2374 26.7185 21.4623 26.0656 20.8094C25.4127 20.1565 24.6376 19.6386 23.7845 19.2852C22.9314 18.9319 22.0171 18.75 21.0938 18.75C20.1704 18.75 19.2561 18.9319 18.403 19.2852C17.5499 19.6386 16.7748 20.1565 16.1219 20.8094C15.469 21.4623 14.9511 22.2374 14.5977 23.0905C14.2444 23.9436 14.0625 24.8579 14.0625 25.7812C14.0625 26.7046 14.2444 27.6189 14.5977 28.472C14.9511 29.3251 15.469 30.1002 16.1219 30.7531C16.7748 31.406 17.5499 31.9239 18.403 32.2773C19.2561 32.6306 20.1704 32.8125 21.0938 32.8125Z"
										fill="#A3A3A3"
									/>
								</svg>
								<input
									type="file"
									id="gallery"
									name="gallery"
									onChange={handleFileChange}
									multiple
									required
								/>
							</div>
						</div>

						<div>
							<button type="submit" className="submitButton">
								Submit Event Request
							</button>
						</div>
					</div>
				</form>

				<div className="accountBox">
					<h1>Have and account?</h1>
					<p>
						Sign in with a Discover Lincoln organization account and create an
						event for your Organization.
					</p>
					<div className="px-4 py-2 rounded shadow justify-center items-center inline-flex transition-colors cursor-pointer bg-green">
						<Link className={"text-cream font-roboto-slab-bold "} href="/login">
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
