import React from "react";
import Image from "next/image";

const Companies = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row gap-6 py-12 w-full max-w-[1280px] h-auto justify-between items-start ">
      <div className="text-left px-6 md:px-0">
        {/* for mobile screen */}
        <h1 className="md:hidden text-lg font-bold font-roboto">
          Trusted by the world&#39;s best companies
          <p>[social proof to build credibility]</p>
        </h1>
        {/* for desktop screen */}
        <h2 className="hidden md:block font-roboto font-bold text-2xl">
          Trusted by 2000+ companies worldwide.
        </h2>
      </div>

      <div className="flex justify-center items-center w-full md:w-auto">
        <Image
          src="/images/Logos.png"
          alt="Logos of trusted companies"
          width={900}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Companies;
