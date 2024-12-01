import React from "react";
import Image from "next/image";

const ExploreCourses = () => {
  const categories = [
    {
      name: "Design & Development",
      courses: "50+ Courses Available",
      icon: "/images/pen.png",
    },
    {
      name: "Marketing",
      courses: "50+ Courses Available",
      icon: "/images/volume-high.png",
    },
    {
      name: "Development",
      courses: "50+ Courses Available",
      icon: "/images/group.png",
    },
    {
      name: "Communication",
      courses: "50+ Courses Available",
      icon: "/images/microphone.png",
    },
    {
      name: "Digital Marketing",
      courses: "50+ Courses Available",
      icon: "/images/link.png",
    },
    {
      name: "Self Development",
      courses: "50+ Courses Available",
      icon: "/images/arrow-2.png",
    },
    {
      name: "Business",
      courses: "50+ Courses Available",
      icon: "/images/briefcase.png",
    },
    {
      name: "Finance",
      courses: "50+ Courses Available",
      icon: "/images/copy.png",
    },
    {
      name: "Consulting",
      courses: "50+ Courses Available",
      icon: "/images/book.png",
    },
  ];

  return (
    <div className=" py-[80px] w-full max-w-[1280px]">
      <div className="mx-auto text-center">
        <h3 className="text-[48px] leading-[57px] font-bold font-roboto">
          Explore Courses By Category
        </h3>
        <p className="text-lg font-roboto mt-4">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        {/* for mobile screen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mt-14 rounded p-8">
          {categories.slice(0, 3).map((category, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-100">
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-white mr-4 rounded">
                <Image
                  src={category.icon}
                  alt={`${category.name} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <h4 className="text-[20px] leading[30px] font-bold font-roboto">
                  {category.name}
                </h4>
                <p className="text-[18px] leading-[27px] font-roboto mt-1">
                  {category.courses}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* for desktop screen */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 rounded p-8">
          {categories.slice(3).map((category, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-100">
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-white mr-4 rounded">
                <Image
                  src={category.icon}
                  alt={`${category.name} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <h4 className="text-[20px] leading[30px] font-bold font-roboto">
                  {category.name}
                </h4>
                <p className="text-[18px] leading-[27px] font-roboto mt-1">
                  {category.courses}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-14 px-6 py-3 rounded border border-black font-roboto leading-6">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default ExploreCourses;
