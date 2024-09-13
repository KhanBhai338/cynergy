import React from "react";

function Section_6() {
  return (
    <div className="lg:flex bg-gray-50 ">
      <div className="lg:w-[40%] py-20 p-10 bg-[#E84C3D] flex gap-5">
        <div className="">
          <div className="size-16 flex justify-center items-center rounded-full bg-[#ffffff20]">
            <p className=" text-[white] text-[26px]">{"<"}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="images/mobile.png" className="w-[80%] " />
        </div>
        <div className="flex h-full items-end">
          <div className="size-16 flex justify-center items-center rounded-full bg-[#ffffff20]">
            <p className="rotate-180 text-[white] text-[26px]">{"<"}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] py-10 p-5 md:p-10 lg:p-20">
        <div className="flex w-full justify-between">
          <p className="border-t-2 border-[#8080809e] w-fit text-[20px] tracking-tighter">
            01
          </p>
          <img src="imagesstarlogo.png" alt="" className="w-[100px]" />
        </div>
        <div>
          <h2 className="text-[20px] ">Text Goes Here.</h2>
          <h1 className="text-[32px] md:text-[44px] text-center mt-2">
            App Title Goes Here.
          </h1>
          <p className="mt-5 leading-7 text-[gray] text-[14px] lg:w-[75%] tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="flex gap-4 md:gap-7 text-[14px] md:text-[20px] mt-10 lg:mt-[100px]">
            <p className="px-6 py-2 bg-gray-100 w-fit rounded-full">
              App Design
            </p>
            <p className="px-6 py-2 bg-gray-100 w-fit rounded-full">
              App Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_6;
