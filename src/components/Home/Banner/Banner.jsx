import React from "react";

const Banner = () => {
  return (
    <div
      className="min-h-[calc(100vh-120px)]"
      style={{
        backgroundImage: 'url("https://i.ibb.co/4VDDdbM/3.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container px-5 mx-auto flex justify-center md:justify-end items-center min-h-[calc(100vh-120px)]">
        <div className="w-full md:w-1/2">
          <h2 className="rancho-font text-4xl md:text-5xl text-white">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="raleway-font text-white mt-4 mb-8">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="my-btn hover:border-white hover:text-white hover:bg-transparent">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
