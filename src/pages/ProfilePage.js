import React from "react";

const ProfilePage = () => (
  <div className="flex flex-col items-center p-6">
    <img
      src="artist-profile-picture.jpg"
      alt="Artist"
      className="w-32 h-32 rounded-full"
    />
    <h2 className="mt-4 text-2xl font-bold">Artist Name</h2>
    <p className="mt-2 text-gray-600">Instagram: @artisthandle</p>
    <p className="text-gray-600">Facebook: fb.com/artistprofile</p>
    <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Artwork gallery */}
      <div className="p-4 bg-gray-200 rounded-lg">Artwork 1</div>
      <div className="p-4 bg-gray-200 rounded-lg">Artwork 2</div>
      <div className="p-4 bg-gray-200 rounded-lg">Artwork 3</div>
    </div>
  </div>
);

export default ProfilePage;
