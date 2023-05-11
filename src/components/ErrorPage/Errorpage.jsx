import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto px-5 h-[calc(100vh-120px)] flex flex-col items-center justify-center">
        <Link
          className="text-[30px] flex gap-4 justify-start items-center rancho-font text-shadow"
          to="/"
        >
          <FaArrowLeft /> Back to home
        </Link>
        <img className="" src={"https://i.ibb.co/mbnpWXp/404.gif"} alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Errorpage;
