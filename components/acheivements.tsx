import React from "react";

export default function Acheivements() {
  return (
    <div className="w-full max-w-[1280px]">
      <div className="mx-auto py-6 px-16 text-center font-roboto">
        <h1 className="font-bold text-[32px] leading-[41px] md:text-[48px] md:leading-[57px]">
          Our Achivements
        </h1>
        <p className="text-[18px] leading-[27px] py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-roboto text-center">
            <div>
                <h2 className="font-bold md:text-[40px] md:leading-[48px] text-xl mt-3">+200</h2>
                <p className="md:leading-6 mt-2">Courses</p>
            </div>
            <div>
                <h2 className="font-bold md:text-[40px] md:leading-[48px] text-xl mt-3">50K</h2>
                <p className="md:leading-6 mt-2">Mentors</p>
            </div>
            <div>
                <h2 className="font-bold md:text-[40px] md:leading-[48px] text-xl mt-3">370k</h2>
                <p className="md:leading-6 mt-2">Students</p>
            </div>
            <div>
                <h2 className="font-bold md:text-[40px] md:leading-[48px] text-xl mt-3">100+</h2>
                <p className="md:leading-6 mt-2">Recognition</p>
            </div>
        </div>
      </div>
    </div>
  );
}
