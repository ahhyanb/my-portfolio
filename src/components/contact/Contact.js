import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

function Contact() {
	const [formStatus, setFormStatus] = useState("");

	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		});
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();

		emailjs
			.sendForm(
				"service_nkhzckt",
				"template_loeux57",
				event.target,
				"Juv6mP1g5AAJejGW2"
			)
			.then(
				() => {
					setFormStatus("Message sent successfully!");
				},
				(error) => {
					setFormStatus("Failed to send message. Please try again.");
					console.error("EmailJS Error:", error);
				}
			);

		event.target.reset();
	};

	return (
		<div className="contact-container" data-aos="fade-up">
			<h1>contact me</h1>
			<p>
				Have a question or want to work together? Fill out the form below,
				and I’ll get back to you as soon as possible.
			</p>

			<form className="contact-form" onSubmit={handleSubmit}>
				<div className="form-group" data-aos="fade-up" data-aos-delay="100">
					<label htmlFor="name">name</label>
					<input type="text" id="name" name="name" placeholder="your name" required />
				</div>
				<div className="form-group" data-aos="fade-up" data-aos-delay="200">
					<label htmlFor="email">email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="yourEmail@email.com"
						required
					/>
				</div>
				<div className="form-group" data-aos="fade-up" data-aos-delay="300">
					<label htmlFor="message">message</label>
					<textarea
						id="message"
						name="message"
						rows="5"
						placeholder="please leave a brief message."
						required
					></textarea>
				</div>
				<div data-aos="zoom-in" data-aos-delay="400">
					<button type="submit" className="submit-button">send message</button>
				</div>
			</form>

			{formStatus && <p className="form-status">{formStatus}</p>}
		</div>
	);
}

export default Contact;
