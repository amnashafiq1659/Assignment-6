import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl w-full py-2 md:py-[150px] px-4 space-y-8 md:px-[80px]">
        {/* First Section*/}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="font-semibold font-roboto text-[18px] leading-[27px] text-center md:text-left">
              Subscribe to our newsletter
            </h1>
            <p className="leading-6 font-roboto md:pr-[150px]  px-[200px] md:px-0 py-4 md:pt-1 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-col md:flex-row items-center space-y-3 sm:space-y-3 w-full   md:space-y-0 md:space-x-3">
              <button className="p-3 pr-[200px] gap-2 rounded border border-black text-left font-roboto leading-6 text-[#505050]">
                Enter your email
              </button>
              <button className="border border-black p-3 px-[125px]  md:px-6 rounded text-lg font-roboto leading-6">
                Subscribe
              </button>
            </div>
            <p className="text-[12px] leading-[18px] mt-3 text-center md:text-left font-roboto">
              By subscribing, you agree with our{" "}
              <span className="underline underline-offset-4">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>

        {/* Middle Section: Links and Logo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left md:py-16 py-4">
          {/* Logo */}
          <div className="flex justify-center md:items-start md:justify-start">
            <Image
              src={"/images/Logo.png"}
              alt="footerLogo"
              width={32}
              height={30}
            />
            <h1 className="font-bold text-[25px] leading-[30px] pl-2">
              Ddsgnr
            </h1>
          </div>

          {/*Column 1 */}
          <div>
            <h3 className="text-text font-semibold mb-4 leading-6">Courses</h3>
            <div className="flex flex-col space-y-4">
              <p>Business</p>
              <p>Development</p>
              <p>Technology</p>
              <p>Design</p>
              <p>Programming</p>
            </div>
          </div>

          {/*Column 2 */}
          <div>
            <h3 className="text-text font-semibold mb-4 leading-6">
              Resources
            </h3>
            <div className="flex flex-col space-y-4">
              <p>Career</p>
              <p>Resume</p>
              <p>Learning</p>
              <p>Interview Preparation</p>
              <p>Jobs</p>
            </div>
          </div>

          {/*Column 3 */}
          <div>
            <h3 className="text-text font-semibold mb-4 leading-6">About Us</h3>
            <div className="flex flex-col space-y-4">
              <p>Contact</p>
              <p>Help/Support</p>
              <p>FAQs</p>
              <p>Terms and Conditions</p>
              <p>Partner</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t py-12 border-black pt-4 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="flex flex-col md:flex-row gap-5 text-center md:text-left mt-5">
            <p>2023 Ddsgnr. All right reserved.</p>
            <div className="flex space-x-6">
              <p className=" underline underline-offset-3">Privacy Policy</p>
              <p className="underline underline-offset-3">Terms of Services</p>
              <p className="underline underline-offset-3">Cookies Settings</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-full max-w-[736px] h-6 flex justify-end gap-5 mt-5">
              <Image
                src={"/images/Facebook.png"}
                alt="facebook"
                width={18}
                height={18}
              />

              <Image
                src={"/images/Instagram.png"}
                alt="instagram"
                width={18}
                height={18}
              />

              <Image
                src={"/images/Twitter.png"}
                alt="twitter"
                width={18}
                height={18}
              />
              <Image
                src={"/images/Linkedin.png"}
                alt="linkedin"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
