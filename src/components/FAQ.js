"use client";
import { fetchGet } from "../api-services/fetch-operations";
import React, { useEffect, useState } from "react";
function FAQ() {
  const [faqData, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(0);
  function getFaq() {
    fetchGet("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getFaq();
  }, []);
  return (
    <div className="px-[5%] xl:px-[10%] py-20 flex flex-col gap-3">
      <h1 className="text-[32px] md:text-[44px] text-center py-5">
        Frequently Asked Questions
      </h1>
      {faqData?.length > 0 &&
        faqData
          ?.filter((filterData) => {
            return filterData.id < 9;
          })
          .map((item, index) => (
            <div key={index} className="border rounded-xl px-5 md:px-10 py-5">
              <div className="flex items-center justify-between h-fit">
                <div
                  className={`${
                    isOpen === item.id ? "text-[red]" : ""
                  } text-[18px] font-[600]`}
                >
                  {item?.title}?
                </div>
                <button
                  onClick={() => setIsOpen(isOpen === item.id ? 0 : item.id)}
                  className="text-[26px]"
                >
                  {isOpen === item.id ? "-" : "+"}
                </button>
              </div>
              <div
                className={`${
                  isOpen === item.id ? "" : "h-0 overflow-hidden"
                } w-full text-[14px] pr-10 leading-7`}
              >
                {item.body}
              </div>
            </div>
          ))}
    </div>
  );
}

export default FAQ;
