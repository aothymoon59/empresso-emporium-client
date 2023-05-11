import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-[120px]">
      <div
        style={{
          backgroundImage: 'url("https://i.ibb.co/c3p1FjR/13.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="pt-[120px] pb-12"
      >
        <footer className="grid md:grid-cols-2 items-center gap-36 container px-5 mx-auto ">
          <div className="footer-desc">
            <img
              src={"https://i.ibb.co/yfXfQf2/logo1.png"}
              className="w-[75px] h-[90px] mb-4"
              alt=""
            />
            <h2 className="sub-title text-shadow mb-6">Empresso Emporium</h2>
            <p className="raleway-font text-xl text-[#1B1A1A] mb-6">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="social-links flex gap-5 text-[40px] mb-6">
              <a href="https://www.facebook.com/aothymoon59" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/aothymoon59" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/aothymoon59/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin />
              </a>
            </div>
            <h2 className="sub-title text-shadow mb-8">Get in Touch</h2>
            <div className="text-xl">
              <p className="flex gap-6 mb-4">
                <FaPhoneAlt /> +88 01533 333 333
              </p>
              <p className="flex gap-6 mb-4">
                <FaTelegramPlane /> info@gmail.com
              </p>
              <p className="flex gap-6">
                <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka
              </p>
            </div>
          </div>
          <div className="footer-form">
            <h2 className="sub-title text-shadow">Connect with Us</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="input w-full mb-4"
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                className="input w-full mb-4"
              />
              <br />
              <textarea
                className="textarea w-full mb-6 resize-none"
                placeholder="Message"
              ></textarea>
              <br />
              <input
                className="my-btn-outline hover:bg-[#331A15] hover:text-white"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </footer>
      </div>
      <div
        style={{
          backgroundImage: 'url("https://i.ibb.co/6yR4nHn/15.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <footer className="container py-3 px-5 mx-auto">
          <p className="text-base md:text-xl rancho-font text-white text-center">
            Copyright Espresso Emporium ! All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
