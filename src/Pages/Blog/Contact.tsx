import { useState } from "react";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", contactForm);
    alert("Thank you for contacting us!");
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-[var( --bg-primary)] text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Have questions, suggestions, or just want to say hi? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={contactForm.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <input
            type="email"
            name="email"
            value={contactForm.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <textarea
            name="message"
            value={contactForm.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          ></textarea>
          <button
            type="submit"
            className="bg-[var(--bg-primary)] text-white font-medium px-6 py-2 rounded-md hover:bg-[var(--bg-primary)]/80 transition-colors duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
