
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "5dfc032f-0210-4704-a900-fce2394c9316");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    if (res.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(res.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-20" id="contact"> 
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-pink-500">
            Contact Me
          </h1>
          <p className="text-gray-300 mt-3 text-lg">
            Feel free to get in touch with me for collaboration or queries.
          </p>
          <div className="w-20 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>
        <form
          action=""
          method="post"
          onSubmit={handleFormSubmit}
          className="bg-gray-800 shadow-xl rounded-2xl p-8 lg:px-16"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              className="w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="text"
              placeholder="First Name"
              name="firstName"
              required
            />
            <input
              className="w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
            />
            <input
              className="w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="number"
              placeholder="Phone"
              name="phone"
              required
            />
          </div>
          <div className="my-5">
            <textarea
              placeholder="Your Message"
              className="w-full h-40 p-3 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              name="message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition duration-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            >
              Send Message
            </button>
          </div>
          <div className="text-center mt-4 text-pink-400">{result}</div>
        </form>
      </div>
    </div>
  );
};
export default Contact;

