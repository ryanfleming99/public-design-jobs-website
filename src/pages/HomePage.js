import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const images = [
    "https://res.cloudinary.com/ryry/image/upload/v1728136230/public-design-jobs/ryan-london_zkiowr.webp",
    "https://res.cloudinary.com/ryry/image/upload/v1728136108/public-design-jobs/ry_boi_public_design_job_artwork_wall_outside_london_HDR_arcite_3bd2a794-63c9-49f9-80fd-f4c6d402a75f_gjnjk6.png",
    "https://res.cloudinary.com/ryry/image/upload/v1728136156/public-design-jobs/ry_boi_An_artistic_representation_of_an_ideal_city_filled_with__c5634c36-eb40-4fc8-88e0-b335b10bbff4_1_srv2tb.webp",
    "https://via.placeholder.com/400x300?text=Image+4",
    "https://via.placeholder.com/400x300?text=Image+5"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 1500); // 1.5-second interval

    return () => clearInterval(imageInterval); // Cleanup interval
  }, [images.length]);

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = index => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      {/* Section 1 */}
      <div
        className="relative flex items-center justify-center min-h-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/ryry/image/upload/v1728138865/public-design-jobs/ry_boi_hyperrealistic_white_only_alabaster_statues_london_white_ee1414a5-55e3-46fd-98d4-e581eb856dad_2_rxkr0k.webp)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white via-transparent via-75%"></div>

        {/* Text Content over the background */}
        <div className="relative z-10 text-center text-white p-4 flex flex-col items-center justify-center h-full w-full">
          <div className="md:w-full text-center p-4">
            <h2
              className="text-6xl font-bold mb-4"
              style={{
                textShadow: "rgb(0 0 0 / 33%) 2px 2px 8px" // Adding text shadow
              }}
            >
              PUBLIC DESIGN JOBS
            </h2>
            <p
              className="text-lg mb-6"
              style={{
                textShadow: "rgb(0 0 0 / 33%) 2px 2px 8px" // Adding text shadow
              }}
            >
              Sign up and explore freelance design work.
            </p>
          </div>

          {/* New Users and Returning Users Sections */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-8">
            {/* New Users Section */}
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-10 rounded-lg text-center">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ textShadow: "rgb(0 0 0 / 33%) 2px 2px 8px" }}
              >
                New Users
              </h2>
              <p
                className="text-lg mb-6"
                style={{ textShadow: "rgb(0 0 0 / 33%) 2px 2px 8px" }}
              >
                Sign up and explore freelance design work.
              </p>
              {/* Embed SendGrid Form */}
              <iframe
                src="https://cdn.forms-content.sg-form.com/131aedd6-83e1-11ef-99e9-9e9726aec15e"
                width="100%"
                height="600px"
                frameBorder="0"
                title="Sign Up Form"
              ></iframe>
            </div>

            {/* Returning Users Section */}
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-10 rounded-lg text-center">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ textShadow: "rgb(0 0 0 / 33%) 2px 2px 8px" }}
              >
                Returning Users
              </h2>
              <p
                className="text-lg mb-6"
                style={{ textShadow: "rgb(0 0 0 / 33%) 2px 2px 8px" }}
              >
                Welcome back! Choose your next step:
              </p>
              {/* CTA Buttons */}
              <div className="flex justify-center space-x-4 w-full">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
                  Get Started
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
                  Become a Freelancer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Image Left, Profiles on Right */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen h-screen p-6 md:p-24">
        {/* Left Side: Image */}
        <div className="md:w-1/2 h-3/6 md:h-[600px] w-full flex items-center justify-center p-4">
          <img
            src={images[currentImage]}
            alt="Slideshow"
            className="h-full w-1/2 object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Right Side: Profiles */}
        <div className="md:w-1/2 text-center md:text-left p-4">
          <h2 className="text-4xl font-bold mb-4">Meet Our Freelancers</h2>
          <p className="text-lg mb-6">
            Discover talented freelancers from around the world.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <p className="text-lg">Freelancer 1</p>
              <p className="text-sm text-gray-500">Graphic Designer</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <p className="text-lg">Freelancer 2</p>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <p className="text-lg">Freelancer 3</p>
              <p className="text-sm text-gray-500">Illustrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen h-3/6 p-6 md:p-24">
        {/* Left Side: FAQ */}
        <div className="md:w-1/2 text-center md:text-left p-4">
          <h2 className="text-4xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-300">
              <button
                className="w-full py-4 text-left text-xl font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(1)}
              >
                What is Public Design Jobs?
              </button>
              {openFAQ === 1 && (
                <p className="px-4 py-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac dui nec dolor ullamcorper sodales.
                </p>
              )}
            </div>
            {/* Add more FAQ questions as needed */}
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="md:w-1/2 h-[50vh] md:h-[600px] w-full flex items-center justify-center p-4">
          <img
            src={images[currentImage]}
            alt="Slideshow"
            className="h-full w-1/2 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
