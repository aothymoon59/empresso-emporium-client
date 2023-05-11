import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, price, photo } =
    coffee;
  return (
    <div
      style={{
        backgroundImage: 'url("https://i.ibb.co/D59YpBt/11.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-5 my-[50px] md:px-0">
        <Link
          className="text-[30px] flex gap-4 justify-start items-center rancho-font text-shadow"
          to="/"
        >
          <FaArrowLeft /> Back to home
        </Link>
      </div>
      <div className="bg-[#F4F3F0] container mx-auto p-5 md:px-28 md:py-16 rounded-md">
        <div className="details-card flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img className="h-[455px] mx-auto" src={photo} alt={name} />
          </div>
          <div className="md:w-1/2">
            <h2 className="sub-title text-shadow mb-8">Niceties</h2>
            <div>
              <p className="text-xl mb-4">
                <span className="font-semibold">Name: </span>
                {name}
              </p>
              <p className="text-xl mb-4">
                <span className="font-semibold">Chef: </span>
                {chef}
              </p>
              <p className="text-xl mb-4">
                <span className="font-semibold">Supplier: </span>
                {supplier}
              </p>
              <p className="text-xl mb-4">
                <span className="font-semibold">Taste: </span>
                {taste}
              </p>
              <p className="text-xl mb-4">
                <span className="font-semibold">Category: </span>
                {category}
              </p>
              <p className="text-xl">
                <span className="font-semibold">Details: </span>
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
