import React from "react";

const SupportPage = () => (
  <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
    <h2 className="mb-6 text-3xl font-bold">Support & FAQ</h2>
    <form className="w-full max-w-md space-y-4">
      <div>
        <label className="block mb-1 text-gray-700">Name:</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-700">Email:</label>
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-700">Message:</label>
        <textarea
          placeholder="Your message"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2 font-bold text-white bg-blue-500 rounded-lg"
      >
        Send
      </button>
    </form>
  </div>
);

export default SupportPage;
