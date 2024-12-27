import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="hidden md:flex w-full max-w-[428px] md:max-w-[1280px] bg-[#f7f7f7] h-[54px]">
      <div className="py-3 w-full flex justify-between items-center gap-8 px-10">
        <div className="w-full max-w-[386px] h-[30px] flex gap-4 items-center">
          <span className=" h-[21px] text-sm font-roboto flex-shrink-0">
            Phone Number: 956 742 455 678
          </span>
          <div className="h-[30px] border border-[#676767]"></div>
          <span className="h-[21px] text-sm font-roboto">
            Email:info@ddsgnr.com
          </span>
        </div>
        <div className="w-full max-w-[736px] h-6 flex justify-end gap-4">
          <Image
            src={"/images/Facebook.png"}
            alt="facebook icon"
            height={24}
            width={24}
          />
          <Image
            src={"/images/Instagram.png"}
            alt="instagram icon"
            height={24}
            width={24}
          />
          <Image
            src={"/images/Twitter.png"}
            alt="twitter icon"
            height={24}
            width={24}
          />
          <Image
            src={"/images/LinkedIn.png"}
            alt="linkedin icon"
            height={24}
            width={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
