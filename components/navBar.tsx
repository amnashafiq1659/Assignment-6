import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-full max-w-[1280px] h-[72px] flex items-center bg-[#F7F7F7] px-3 md:px-10 border-y-[1px] border-[#676767]">
      <div className="w-full max-w-[1152px] h-11 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={"/images/Logo.png"}
            alt={"Logo"}
            width={32.58}
            height={30.38}
          />
          <span className="w-[90px] h-[30px] font-inter font-bold text-[30px] leading-[30px] ml-2">
            Ddsgnr
          </span>
        </div>
      </div>
      {/* for desktop screen */}
      <div className="hidden md:w-full h-11 md:gap-8 md:flex md:bg-white">
        <div className="flex space-x-8 w-[687px] items-center p-[10px] gap-[10px]">
          <span className="flex items-center">Home</span>
          <span className="flex items-center">Courses</span>
          <span className="flex items-center">Services</span>
          <span className="flex items-center">Achievement</span>
          <span className="flex items-center">About Us</span>
          <span className="flex items-center">Testimonials</span>
        </div>

        <div className="flex w-full max-w-[191px] h-10 gap-3">
          <button className="font-roboto text-[16px] py-2 rounded-[5px] px-5 border-[1px] border-black">
            Login
          </button>
          <button className="font-roboto bg-black text-white rounded-[5px] py-2 px-5 border-[1px] border-black flex-shrink-0">
            Sign Up
          </button>
        </div>
      </div>
      {/* for mobile screen */}
      <div className="md:hidden ">
        <Image src={"/images/Menu.png"} alt={"Menu"} width={30} height={30} />
      </div>
    </div>
  );
};

export default NavBar;
