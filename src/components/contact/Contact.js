import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
    const [formStatus, setFormStatus] = useState(""); // To show success or error message

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                "service_nkhzckt", // Replace with your EmailJS service ID
                "template_loeux57", // Replace with your EmailJS template ID
                event.target,
                "Juv6mP1g5AAJejGW2" // Replace with your EmailJS user ID
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

        event.target.reset(); // Reset the form fields
    };

    return (
        <div className="contact-container">
            <h1>contact me</h1>
            <p>
                Have a question or want to work together? Fill out the form below,
                and I’ll get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" name="name" placeholder="your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="yourEmail@email.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="please leave a brief message."
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">send message</button>
            </form>

            {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
    );
}

export default Contact;
