import React from "react";

function Banner() {
  return (
    <div className=" w-[100%] relative py-20 px-6 lg:px-[5%] overflow-hidden">
      <div className="absolute top-0 left-0 bottom-0 right-0 opacity-20 z-[-1]">
        <img
          src="/view-mountain-with-dreamy-aesthetic 1.png"
          className="min-w-full min-h-full"
        />
      </div>
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row w-[100%] items-center h-full relative pb-32">
        <div className="lg:w-[33%] space-y-7">
          <h1 className="text-[#2C3E52] text-[26px] lg:text-[54px] font-[500] leading-none">
            We Design Apps That Connect...
          </h1>
          <p className="text-[gray] text-[14px] leading-7">
            We specialize in delivering creative mobile app solutions that make
            a real difference. Our mission is to combine creativity and
            technology to deliver solutions that exceed expectations and drive
            success.
          </p>
          <button className="border border-[#E84C3D] px-4 lg:px-10 py-1 lg:py-3 rounded-full lg:text-[20px]">
            Start Now
          </button>
        </div>
        <div className="lg:w-[35%] flex items-center justify-center">
          <img src="images/Group 131.png" className="w-[80%]" />
        </div>
        <div className="relative h-full flex justify-between items-center -mt-18 lg:w-[32%] px-5">
          <div className="flex flex-col gap-8 w-full">
            <div className="w-full">
              <h1 className="text-[#2C3E52] font-semibold text-[40px]">98%</h1>
              <p className=" border-l-2 px-2 text-[13px] text-[gray]">
                The Data and Information
                <br />
                Displayed is accurate.
              </p>
            </div>
            <div className="w-full">
              <h1 className="text-[#2C3E52] font-semibold text-[40px]">875k</h1>
              <p className=" border-l-2 px-2 text-[13px] text-[gray]">
                Users who are satisfied with the
                <br />
                interface and experience of the app.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="z-[-1] absolute bottom-0 left-0 ">
        <img src="images/Podium - 01 1.png" />
      </div>
      <div className="hidden absolute right-[-10%] top-[45%]  rotate-[-90deg] lg:flex items-end justify-center gap-10 ">
        <div className="flex gap-x-10 items-center">
          <div className="size-5 bg-gray-300 rounded-full"></div>
          <div className="size-5 bg-gray-300 rounded-full"></div>
          <div className="size-5 bg-gray-300 rounded-full"></div>
        </div>
        <h1 className="h-fit font-[600] whitespace-nowrap flex items-end justify-start">
          We Are The Mobile Business Builders
        </h1>
      </div>
    </div>
  );
}

export default Banner;
