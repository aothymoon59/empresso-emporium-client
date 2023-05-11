import React from "react";

const Instagram = () => {
  return (
    <div className="container mx-auto px-5 mt-[120px]">
      <div className="section-header flex flex-col items-center mb-12">
        <div className="flex items-center gap-1 text-xl">
          <hr className="w-3 border-dashed border-black" />
          <span className="raleway-font text-[#1B1A1A]">Follow Us Now</span>
          <hr className="w-3 border-dashed border-black" />
        </div>
        <h2 className="rancho-font text-4xl md:text-5xl mt-2 mb-4 text-shadow">
          Follow on Instagram
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <img
          className="w-full"
          src={"https://i.ibb.co/HFrFYHw/Rectangle-9.png"}
          alt=""
        />
        <img
          className="w-full"
          src={"https://i.ibb.co/k4pNv5d/Rectangle-10.png"}
          alt=""
        />
        <img
          className="w-full"
          src={"https://i.ibb.co/WxfV9N8/Rectangle-11.png"}
          alt=""
        />
        <img
          className="w-full"
          src={"https://i.ibb.co/7Y3Vbb4/Rectangle-12.png"}
          alt=""
        />
        <img
          className="w-full"
          src={"https://i.ibb.co/dJcvVLC/Rectangle-13.png"}
          alt=""
        />
        <img
          className="w-full"
          src={"https://i.ibb.co/kH0MW2f/Rectangle-14.png"}
          alt=""
        />
        <img
          className="w-full"
          src={"https://i.ibb.co/qN6wWMY/Rectangle-15.png"}
          alt=""
        />
        <img
          className="w-full"
          src={"https://i.ibb.co/t49RRcj/Rectangle-16.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Instagram;
