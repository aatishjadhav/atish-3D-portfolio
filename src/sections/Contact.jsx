import { useState } from "react";
import FadeInSection from "../components/FadeInSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mpwldarp", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("There was a problem sending your message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="dark:max-w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <div
      id="contact"
      className="bg-gray-100 py-20 px-6 lg:px-20 max-w-6xl mx-auto dark:bg-gray-900 dark:text-gray-100"
    >
      <h2 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center mb-10 dark:text-gray-100">
        &lt; Contact Me /&gt;
      </h2>
      <div className="max-w-lg mx-auto">
        <FadeInSection>
          {submitted ? (
            <div className="text-center text-green-600 font-semibold text-lg">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow"
            >
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-100">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="hover:bg-[#121932] dark:border-none py-2 px-6 rounded-md bg-white dark:bg-sky-500 hover:dark:bg-sky-300 transition font-medium text-black dark:text-gray-100 dark:hover:text-black border hover:text-white cursor-pointer hover:translate-y-[-4px] motion-safe:transition-all motion-safe:duration-300"
              >
                Let's Talk
              </button>
            </form>
          )}
        </FadeInSection>
      </div>
      </div>
      </section>
  );
};

export default Contact;
