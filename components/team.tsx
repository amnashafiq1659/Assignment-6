import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      image: "/images/Image-7.png",
      name: "James Nduku",
      title: "Marketing Coordinator",
    },
    {
      image: "/images/Image-8.png",
      name: "Joseph Munyambu",
      title: "Nursing Assistant",
    },
    {
      image: "/images/Image-9.png",
      name: "Joseph Ngumbau",
      title: "Medical Assistant",
    },
    {
      image: "/images/Image-10.png",
      name: "Erick Kipkemboi",
      title: "Web Designer",
    },
    {
      image: "/images/Image-11.png",
      name: "Stephen Kerubo",
      title: "President of Sales",
    },
    {
      image: "/images/Image-12.png",
      name: "John Leboo",
      title: "Dog Trainer",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-y-8 p-8 min-h-screen w-full max-w-[1280px] bg-gray-100">
      <h1 className="text-[32px] leading-[41px] md:text-[48px] md:leading-[57px] font-bold font-roboto mt-2 md:mt-12">
        Our Team
      </h1>
      <p className="text-[18px] leading-[27px] font-roboto text-center md:mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {/* for mobile screen */}
      <div className="grid grid-cols-1 w-full max-w-[1280px] md:hidden">
        {teamMembers.slice(0, 3).map((member, index) => (
          <div key={index} className="flex flex-col items-center mt-8">
            <Image
              src={member.image}
              alt={`Image of ${member.name}`}
              width={80}
              height={80}
            />
            <div className="text-center">
              <h1 className="text-[20px] leading-[30px] font-roboto font-semibold mt-5">
                {member.name}
              </h1>
              <p className="text-[18px] leading-[27px] font-roboto">
                {member.title}
              </p>
            </div>
            <div className="flex gap-x-4 mt-5">
              <Image
                src="/images/LinkedIn.png"
                alt="LinkedIn"
                width={18}
                height={18}
              />

              <Image
                src="/images/Twitter.png"
                alt="Twitter"
                width={18}
                height={18}
              />

              <Image
                src="/images/Dribble.png"
                alt="Dribble"
                width={18}
                height={18}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="rounded border px-4 py-2 border-black my-5  font-roboto leading-[24px] md:hidden">
        View All
      </button>
      {/* for desktop screen */}
      <div className="md:grid md:grid-cols-3 gap-x-3  w-full max-w-[1280px] hidden">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center gap-y-4 p-4">
            <Image
              src={member.image}
              alt={`Image of ${member.name}`}
              width={80}
              height={80}
            />
            <div className="text-center">
              <h1 className="text-[20px] leading-[30px] font-roboto font-semibold mt-2">
                {member.name}
              </h1>
              <p className="text-[18px] leading-[27px] font-roboto">
                {member.title}
              </p>
            </div>
            <div className="flex gap-x-4 mt-3 mb-8">
              <Image
                src="/images/Linkedin.png"
                alt="LinkedIn"
                width={18}
                height={18}
              />

              <Image
                src="/images/Twitter.png"
                alt="Twitter"
                width={18}
                height={18}
              />

              <Image
                src="/images/Dribble.png"
                alt="Dribble"
                width={18}
                height={18}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
