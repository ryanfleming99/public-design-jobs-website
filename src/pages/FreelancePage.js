import React from "react";
import { Image } from "cloudinary-react";

const FreelancePage = () => {
  const images = [
    { id: "sample1", src: "sample_image_1" },
    { id: "sample2", src: "sample_image_2" }
    // Add more images here
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map(image => (
        <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
          <Image
            cloudName="your-cloudinary-cloud-name"
            publicId={image.src}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default FreelancePage;
