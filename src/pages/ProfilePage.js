import React from "react";
import Navbar from "../components/Navbar";

const ProfilePage = () => (
  <div className="p-36 flex flex-col items-center p-6 bg-gray-200">
    <Navbar />
    <img
      src="https://via.placeholder.com/150"
      alt="Artist"
      className="w-32 h-32 rounded-full shadow-lg"
    />
    <h2 className="mt-4 text-2xl font-bold">Jane Doe</h2>
    <p className="mt-2 text-gray-600">Instagram: @jane_artworks</p>
    <p className="text-gray-600">Facebook: fb.com/janeartgallery</p>
    <p className="mt-4 text-center text-gray-700 max-w-2xl">
      Jane Doe is a contemporary artist specializing in abstract and surrealist
      art. Her work explores the boundaries between dream and reality, creating
      visually compelling pieces that evoke deep emotions. With exhibitions in
      several galleries worldwide, Jane has built a reputation for her unique
      style and captivating compositions.
    </p>
    <h3 className="mt-8 text-xl font-semibold">Artist Statement</h3>
    <p className="mt-2 text-center text-gray-600 max-w-3xl">
      "Art is a journey into the subconscious. I aim to create pieces that
      provoke thought and challenge conventional perceptions of reality. Through
      abstract shapes and vibrant colors, my art tells stories that are both
      personal and universal."
    </p>
    <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Artwork gallery */}
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Artwork 1"
          className="w-full h-48 object-cover rounded-md"
        />
        <h4 className="mt-2 text-lg font-bold">Dreamscape</h4>
        <p className="text-gray-500">Acrylic on canvas, 2023</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Artwork 2"
          className="w-full h-48 object-cover rounded-md"
        />
        <h4 className="mt-2 text-lg font-bold">Eternal Flow</h4>
        <p className="text-gray-500">Mixed media, 2022</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Artwork 3"
          className="w-full h-48 object-cover rounded-md"
        />
        <h4 className="mt-2 text-lg font-bold">Fragments of Time</h4>
        <p className="text-gray-500">Oil on canvas, 2021</p>
      </div>
    </div>
    <h3 className="mt-8 text-xl font-semibold">Exhibitions</h3>
    <ul className="mt-2 list-disc list-inside text-gray-700">
      <li>The Abstract Collective, New York, 2023</li>
      <li>Dreamscapes Gallery, London, 2022</li>
      <li>Surreal Visions Exhibit, Paris, 2021</li>
    </ul>
    <h3 className="mt-8 text-xl font-semibold">Contact Information</h3>
    <p className="mt-2 text-gray-600">Email: janedoe@example.com</p>
    <p className="text-gray-600">Website: www.janedoeart.com</p>
  </div>
);

export default ProfilePage;
