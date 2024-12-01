import React from "react";
import Image from "next/image";
const courses = [
  {
    category: "Design",
    title: "UX/UI Design 201",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/images/Image-1.png",
  },
  {
    category: "Programming",
    title: "Introduction to Python",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/images/Image-2.png",
  },
  {
    category: "Business",
    title: "Data Analysis for Beginners",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/images/Image-3.png",
  },
  {
    category: "Art",
    title: "Art Specialization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/images/Image-4.png",
  },
  {
    category: "Law",
    title: "Rule of Law",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/images/Image-5.png",
  },
  {
    category: "Tech",
    title: "Introduction to Webflow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/images/Image-6.png",
  },
];

const Courses = () => {
  return (
    <div className="w-full max-w-[1280px] pt-[180px] pb-[100px]">
      <h1 className="text-[32px] leading-[41px] md:text-[56px] md:leading-[67px] font-bold text-center font-roboto mb-4">
        Courses
      </h1>
      <p className="text-[18px] leading[27px] text-center font-roboto">
        Your Ultimate Guide to Learning
      </p>

      <div className="flex justify-center gap-4 mt-14">
        <button className="px-4 py-2 leading-6 font-roboto border-b border-[#676767]">
          Popular
        </button>
        <button className="px-4 py-2 leading-6 font-roboto">Recommended</button>
        <button className="px-4 py-2 leading-6 font-roboto">Best Price</button>
      </div>
      {/* for mobile screen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mt-16 px-4 overflow-hidden">
        {courses.slice(0,3).map((course, index) => (
          <div key={index}>
            <Image
              src={course.image}
              alt={course.title}
              width={416}
              height={300}
              className="w-full object-cover"
            />

            <div className="p-4 bg-gray-100">
              <h2 className="text-[14px] leading-[21px] font-semibold font-roboto text-left mb-2">
                {course.category}
              </h2>
              <p className="font-roboto font-bold text-2xl mb-3 text-left">
                {course.title}
              </p>
              <p className="font-roboto leading-[24px] mb-4 text-left">{course.description}</p>

              <div className="mt-6 flex items-center gap-10">
                <button className="px-5 py-2 border rounded border-black">
                  Enroll Now
                </button>
                <span className="leading-6 font-medium text-left">
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* for desktop screen */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mt-16">
        {courses.slice(3).map((course, index) => (
          <div key={index}>
            <Image
              src={course.image}
              alt={course.title}
              width={416}
              height={300}
              className="object-cover"
            />

            <div className="p-4 bg-gray-100">
              <h2 className="text-[14px] leading-[21px] font-semibold font-roboto">
                {course.category}
              </h2>
              <p className="font-roboto font-bold text-2xl my-3">
                {course.title}
              </p>
              <p className="font-roboto leading-[24px]">{course.description}</p>

              <div className="mt-6 flex items-center gap-10">
                <button className="px-5 py-2 border rounded border-black">
                  Enroll Now
                </button>
                <span className="leading-6 font-medium text-left">
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <button className="px-4 py-2 border rounded border-black leading-6">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
