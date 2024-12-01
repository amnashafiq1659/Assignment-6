import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full max-w-[1280px] flex md:flex-row flex-col">
      <div className="w-full flex flex-col justify-center md:px-4 gap-y-9 pt-7 items-center md:items-start md:mx-12">
        <div className="  md:text-left md:gap-y-7 w-full max-w-[500px] flex flex-col gap-6 py-4 px-8">
          <h1 className="font-bold font-roboto text-[40px] leading-[48px] md:text-[56px] md:leading-[67px]">
            Learn new skills online with ease
          </h1>
          <p className="text-lg md:text-[18px] md:leading-[27px] md:h-[54px] font-roboto pr-8">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex gap-2 py-4">
            <button className="rounded-[5px] border-[1px] border-black bg-black text-white py-3 px-6">
              Start Learning Now
            </button>
            <button className="rounded-[5px] border-[1px] border-black px-6">
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Image
          src={"/images/Image.png"}
          alt="image"
          height={900}
          width={640}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
