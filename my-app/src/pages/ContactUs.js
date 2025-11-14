import React, { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Your message has been sent successfully!");

        // Clear message after 5 seconds
        setTimeout(() => setStatus(""), 5000);

        // Reset form fields
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section className="contact-section p-6 max-w-xl mx-auto bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2 text-center">Contact Us</h2>
            <p className="text-gray-600 mb-6 text-center">
                We'd love to hear from you! Fill out the form below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-1/2 border rounded-lg p-2"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-1/2 border rounded-lg p-2"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-2"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block mb-1 text-gray-700">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Message subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-2"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-1 text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-2"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Send Message
                </button>

                {status && (
                    <p className="status-message text-green-600 text-center mt-2">
                        {status}
                    </p>
                )}
            </form>
        </section>
    );
}