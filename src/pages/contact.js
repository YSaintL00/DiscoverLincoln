import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function contact() {
	const [form, setForm] = useState({
		Name: "",
		Email: "",
		InquiryReason: "",
		Message: "",
	});

	async function submitForm(e) {
		e.preventDefault();

		// throw an error toast if email doesn't contain a .
		if (!form.Email.includes(".")) {
			toast.error("Please enter a valid email address");
			return;
		}

		const res = await fetch(
			"https://strapi.discoverlincoln-c9.civiconnect.net/api/contact-form-submissions",
			{
				method: "POST",
				body: JSON.stringify({ data: form }),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		console.log(res);

		if (res.ok) {
			toast.success("Thanks for reaching out!");
		}
	}

	return (
		<div id="contact-page">
			{/* TODO: scope styles to this component */}
			<div className="centered-container">
				<div className="background">
					<div className="contactInfo">
						<form className="form" onSubmit={submitForm}>
							<h1 className="header">
								<span>Connect </span> With Us!
							</h1>

							<input
								value={form.Name}
								onChange={(e) => setForm({ ...form, Name: e.target.value })}
								type="text"
								id="fname"
								name="fname"
								placeholder="John Doe"
							/>

							<input
								value={form.Email}
								onChange={(e) => setForm({ ...form, Email: e.target.value })}
								type="email"
								id="email"
								name="email"
								placeholder="name@domain.ca"
							/>

							<input
								value={form.InquiryReason}
								onChange={(e) =>
									setForm({ ...form, InquiryReason: e.target.value })
								}
								type="text"
								id="help"
								name="help"
								placeholder="How can we help?"
							/>

							<textarea
								value={form.Message}
								onChange={(e) => setForm({ ...form, Message: e.target.value })}
								id="message"
								name="message"
								rows="4"
								cols="50"
								placeholder="Your message...."
							/>

							<button className="button">Submit</button>
						</form>
						<img className="picture" src="/lincoln-map.png" />
						<div className="background-accent"></div>
					</div>

					<div className="contact-details">
						<div>
							<p className="contact-option">
								<i className="fa-regular fa-envelope"></i> Email{" "}
							</p>
							<p className="contact-option green">info@lincoln.ca</p>
						</div>

						<div>
							<p className="contact-option">
								<i className="fa-regular fa-clock"></i> Availability{" "}
							</p>
							<p className="contact-option green">Mon-Fri: 9am-5pm</p>
						</div>

						<div>
							<p className="contact-option">
								{" "}
								<i className="fa-solid fa-phone"></i> Phone{" "}
							</p>
							<p className="contact-option green">(905) 563-2799</p>
						</div>

						<div>
							<p className="contact-option">
								{" "}
								<i className="fa-solid fa-location-dot"></i> Location{" "}
							</p>
							<p className="contact-option green">
								4800 South Service Road, Beamsville
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
