import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import CoffeeCard from "./CoffeeCard/CoffeeCard";
import { InfinitySpin } from "react-loader-spinner";

const Products = () => {
  const [coffees, setCoffees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://coffee-server-aothymoon59.vercel.app/coffees"
        );
        const data = await response.json();
        setCoffees(data);
        setIsLoading(false);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching coffees:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="min-h-screen mt-28"
      style={{
        background:
          'url("https://i.ibb.co/xfhNwxP/4.png") top left no-repeat, url("https://i.ibb.co/tHSYysj/5.png") bottom right no-repeat',
        backgroundSize: "auto, auto",
      }}
    >
      <div className="container mx-auto px-5">
        <div className="section-header flex flex-col items-center">
          <div className="flex items-center gap-1 text-xl">
            <hr className="w-3 border-dashed border-black" />
            <span className="raleway-font text-[#1B1A1A]">Sip & Savor</span>
            <hr className="w-3 border-dashed border-black" />
          </div>
          <h2 className="rancho-font text-4xl md:text-5xl mt-2 mb-4 text-shadow">
            Our Popular Products
          </h2>
          <Link to="/addCoffee">
            <button className="my-btn hover:border-black text-shadow hover:bg-transparent flex gap-2 justify-center items-center">
              Add Coffee <FaCoffee />
            </button>
          </Link>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            {/* <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div> */}
            <InfinitySpin width="200" color="#331A15" />
          </div>
        ) : (
          <div className="coffees grid md:grid-cols-2 gap-6 mt-12">
            {coffees.map((coffee) => (
              <CoffeeCard
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
                key={coffee._id}
              ></CoffeeCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
