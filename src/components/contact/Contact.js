import "./Contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <h1>contact me</h1>
            <p>
                Have a question or want to work together? Fill out the form below,
                and I’ll get back to you as soon as possible.
            </p>

            <form className="contact-form">
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

        </div>
    );
}

export default Contact;
