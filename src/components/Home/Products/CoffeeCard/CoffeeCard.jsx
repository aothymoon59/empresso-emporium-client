import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-server-aothymoon59.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
            const remaining = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="w-[35%] h-60 p-5">
          <img src={photo} className="w-full h-full" alt={name} />
        </div>
        <div className="raleway-font mr-12 ml-8 flex justify-between w-full items-center">
          <div>
            <p className="text-xl mb-4">
              <span className="font-semibold">Name: </span>
              {name}
            </p>
            <p className="text-xl mb-4">
              <span className="font-semibold">Chef: </span>
              {chef}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Price: </span>
              {price} Taka
            </p>
          </div>
          <div className="">
            <div className="text-xl flex flex-col gap-4">
              <Link to={`/viewCoffee/${_id}`}>
                <button className="btn bg-[#D2B48C] rounded-md border-0">
                  <FaEye />
                </button>
              </Link>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn bg-blue-600 rounded-md border-0">
                  <FaPen />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn rounded-md bg-[#EA4744] border-0"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
