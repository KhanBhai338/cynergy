import React from "react";

function Section_2() {
  return (
    <div className="flex flex-col items-center py-10 text-[#2C3E52]">
      <h1 className="text-[24px] text-center px-3">Bespoke Software For Your Growth</h1>
      <div></div>
      <h1 className="text-[32px] md:text-[44px] text-center px-3">
        We Build the Future of Mobile Experiences
      </h1>
      <p className="text-center px-3 md:w-[55%] mt-5 leading-loose text-gray-500">
        We specialize in delivering creative mobile app solutions that make a
        real difference. Our mission is to combine creativity and technology to
        deliver solutions that exceed expectations and drive success.
      </p>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 px-[5%] xl:px-[10%] w-full mt-10">
        {[1, 2, 3].map(() => (
          <div className="border-[.5px] border-black pt-16 pb-5 rounded-[15px]">
            <div className="w-full h-9 flex items-center px-10 bg-[#E84C3D] ">
              <div className="size-[70px] bg-white flex justify-center items-center px-1">
                <img alt="" src="images/Group 26.png" />
              </div>
            </div>
            <div className="py-8 pt-10 px-10">
              <h1 className="text-[21px] font-[500]">Mobile App Development</h1>
              <p className="pt-6 text-[14px] leading-6 text-gray-600">
                After digesting your idea/project, our professional mobile app
                designers will build out a beautiful Wireframe & Clickable
                Prototype to bring your project to life with color and brand.
              </p>
              <p className="text-[15px] pt-6">Average Time: 2 weeks</p>
              <p className="text-[15px] ">Average Cost: $5,000</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section_2;
