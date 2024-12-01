import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/images/Image-9.png",
      name: "James Neduku",
      title: "Software Developer",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/images/Image-7.png",
      name: "Erick Kipkemboi",
      title: "Scrum Master",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/images/Image-12.png",
      name: "Stephen Karubo",
      title: "UI/UX Designer",
    },
  ];

  return (
    <div className="flex w-full max-w-[1280px] md:bg-gray-100 flex-col items-start md:py-14 py-10">
      <div className="w-full px-16">
        <h1 className="md:hidden text-[32px] leading-[41px] font-bold mb-4 text-center font-roboto">
          What Our Students Say
        </h1>
        <h1 className="hidden md:block text-[48px] leading-[57px] font-roboto font-bold mb-6">
          Customer testimonials
        </h1>
        <p className=" mb-10 text-center font-roboto text-[18px] leading-8 px-16 md:px-1 md:text-left md:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 md:px-16">
        {/* Mobile: Show only the first testimonial */}
        {testimonials.slice(0, 1).map((testimonial, index) => (
          <div
            key={index}
            className="border border-black p-8 md:hidden w-[380px] h-[321px] mx-auto"
          >
            {/* Stars */}
            <div className="flex justify-start">
              <Image
                src="/images/Stars.png"
                alt="Star"
                height={19}
                width={116}
                className="mr-1"
              />
            </div>

            {/* Description */}
            <p className="text-lg my-5 pr-5 font-roboto">
              {testimonial.description}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-5">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <h1 className="font-semibold leading-6 font-roboto">
                  {testimonial.name}
                </h1>
                <p className=" leading-6 font-roboto">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Desktop: Show all testimonials */}
        {testimonials.slice(0).map((testimonial, index) => (
          <div
            key={index}
            className="hidden md:block border border-black p-8 w-[362px] h-[321px]"
          >
            {/* Stars */}
            <div className="flex justify-start">
              <Image
                src="/images/Stars.png"
                alt="Star"
                height={19}
                width={116}
                className="mr-1"
              />
            </div>

            {/* Description */}
            <p className="text-[18px] leading-[27px] font-roboto my-6">
              {testimonial.description}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-5">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <h1 className="font-semibold leading-6 font-roboto">
                  {testimonial.name}
                </h1>
                <p className="leading-6 font-roboto">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full mt-12 flex justify-between px-16 mb-16">
        <div className="bg-transparent mt-5">
          <Image
            src="/images/Slider Dots.png"
            alt="Slider Dots"
            height={8}
            width={72}
          />
        </div>
        <button className="bg-transparent">
          <Image
            src="/images/Slider Buttons.png"
            alt="Next"
            width={111}
            height={48}
          />
        </button>
      </div>
    </div>
  );
}
