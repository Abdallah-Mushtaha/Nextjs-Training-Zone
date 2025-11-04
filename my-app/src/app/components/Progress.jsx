"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState, useEffect } from "react";

export default function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const target = 63;
    const step = 1;
    const interval = 20;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h2 className=" text-black mb-12 text-lg font-bold">
        Topic For This Course
      </h2>

      <div className="relative w-[100%] h-6">
        <div className="absolute w-full h-2 bg-gray-300 rounded-full overflow-hidden top-1">
          <div
            className="h-2 bg-progress transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div
          className="absolute -top-2 flex items-center gap-2"
          style={{ left: `calc(${progress}% - 1rem)` }}
        >
          <div className="flex-col justify-center items-center ">
            <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400 text-xs  text-black  p-4 relative bottom-9">
              YOU
            </div>
            <IoMdArrowDropdown className="relative bottom-9 text-gray-400 mx-auto" />
          </div>
          <span className="text-sm  text-black mt-5">{progress}%</span>
        </div>
      </div>
    </>
  );
}
