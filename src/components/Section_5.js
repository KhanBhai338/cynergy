import React from "react";

function Section_5() {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center px-4 lg:px-10 py-10 pb-20">
      <div className="lg:w-[80%]">
        <div className="flex flex-col w-full  justify-center items-center">
          <h1 className="text-[20px] md:text-[32px] text-[#2C3E52] text-center leading-6 lg:leading-10">
            Make the industries section like the screenshot
            <br />
            Reimagine Mobile Experiences Across Every Industry
          </h1>
          <p className="text-[14px] text-[#7D818B] leading-6 text-center mt-4">
            Cynergy Studios delivers impactful mobile apps across a variety of
            industries. From healthcare to retail, education to entertainment,
            we create solutions that drive success and enhance user experiences,
            no matter the field.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
        <div>
            <img src="images/image (3).png"/>
            <h1 className="text-[#2C3E52] text-[18px] text-center mt-3">Healthcare</h1>
        </div>
        <div>
            <img src="images/image (4).png"/>
            <h1 className="text-[#2C3E52] text-[18px] text-center mt-3">Healthcare</h1>
        </div>
        <div>
            <img src="images/image (5).png"/>
            <h1 className="text-[#2C3E52] text-[18px] text-center mt-3">Healthcare</h1>
        </div>
        <div>
            <img src="images/Mask group (1).png"/>
            <h1 className="text-[#2C3E52] text-[18px] text-center mt-3">Healthcare</h1>
        </div>
        <div>
            <img src="images/Mask group.png"/>
            <h1 className="text-[#2C3E52] text-[18px] text-center mt-3">Healthcare</h1>
        </div>
      </div>
    </div>
  );
}

export default Section_5;
