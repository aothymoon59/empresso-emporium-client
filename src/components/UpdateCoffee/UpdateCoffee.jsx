import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, price, photo } =
    coffee;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      price,
      photo,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-server-aothymoon59.vercel.app/coffees/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Updated!", "Your coffee has been Updated.", "success");
            }
          });
      }
    });
  };

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
        <div className="section-header max-w-4xl mx-auto text-center mb-12">
          <h2 className="sub-title">Update Existing Coffee Details</h2>
          <p className="text-lg raleway-font text-[#1B1A1AB2]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdate}>
          {/* form name and chef row */}
          <div className="md:flex md:mb-6 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full"
                  required
                  defaultValue={name}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="input input-bordered w-full"
                  required
                  defaultValue={chef}
                />
              </label>
            </div>
          </div>
          {/* form supplier and taste row */}
          <div className="md:flex md:mb-6 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full"
                  required
                  defaultValue={supplier}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                  required
                  defaultValue={taste}
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex md:mb-6 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                  required
                  defaultValue={category}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                  required
                  defaultValue={details}
                />
              </label>
            </div>
          </div>

          {/* form price and photo url row */}
          <div className="md:flex mb-6 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Enter coffee price"
                  className="input input-bordered w-full"
                  required
                  defaultValue={price}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  required
                  defaultValue={photo}
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="my-form-btn hover:bg-[#a7650f] hover:text-white"
          >
            Update Coffee Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
