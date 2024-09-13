"use client";
import { fetchData } from "../redux/slice/slice"; 
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Section_4() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);

  const handleFetch = () => {
    dispatch(fetchData("https://dummyjson.com/products"));
  };
  useEffect(() => {
    handleFetch();
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col items-center py-10 pb-20">
      <h1 className="text-[32px] md:text-[44px] text-center">
        Recent News & Tech Insights
      </h1>
      <div className="px-[10%] lg:px-[5%] xl:px-[10%] grid md:grid-cols-3 gap-5 xl:gap-10 w-full mt-16">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" &&
          data?.products?.length > 0 &&
          data?.products
            ?.filter((_, ind) => {
              return ind < 6 && ind % 2 == 0;
            })
            .map((item, index) => (
              <div key={index} className="">
                <div className="w-full flex justify-center items-center">
                  <img src={item.images} className="sm:w-[60%] md:w-full" />
                </div>
                <p className="text-[12px] mt-6 text-[gray]">28 / Aug / 2024</p>
                <h1 className="mt-2 text-[22px]">{item.title}</h1>
                <p className="mt-3 text-[14px] text-[gray]">
                  {item.description}
                </p>
                <p className="mt-10 text-[15px] px-5 bg-gray-50 rounded-full w-fit py-2">
                  #Development
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Section_4;
