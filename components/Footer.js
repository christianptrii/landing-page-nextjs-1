import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/assets/footerlogo.svg" alt="footer lgo" />
          <p className="text-center lg:text-start">Cempaka Street, Jakarta +62 8123 - 4567 - 8911</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Company</p>
          <a href="#" className="hover:text-[#7270dd]">Careers</a>
          <a href="#" className="hover:text-[#7270dd]">Teachers</a>
          <a href="#" className="hover:text-[#7270dd]">Support</a>
          <a href="#" className="hover:text-[#7270dd]">Contact</a>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Product</p>
          <a href="#" className="hover:text-[#7270dd]">Courses</a>
          <a href="#" className="hover:text-[#7270dd]">Pricing</a>
          <a href="#" className="hover:text-[#7270dd]">Blog</a>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Legal</p>
          <a href="#" className="hover:text-[#7270dd]">Terms & Conditions</a>
          <a href="#" className="hover:text-[#7270dd]">Privacy Policy</a>
        </div>
        <div className="flex items-center gap-5">
                <BsFacebook className="text-3xl text-gray-500 hover:text-[#7270dd]"/>
                <BsTwitter className="text-3xl text-gray-500 hover:text-[#7270dd]"/>
                <BsInstagram className="text-3xl text-gray-500 hover:text-[#7270dd]"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
