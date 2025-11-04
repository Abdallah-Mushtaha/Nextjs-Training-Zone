"use client";
import { useState } from "react";
import { BreadcrumbWithCustomSeparator } from "./BreadcrumbDemo";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

export default function Videos({ setIsQuestionsOpen, setIsLeaderboardOpen }) {
  const socialIcons = [
    IoDocumentTextOutline,
    FaRegCommentDots,
    MdOutlineQuestionMark,
    IoPerson,
  ];
  const [play, setPlay] = useState(false);

  const handleScroll = (index) => {
    const sectionIds = ["courseMaterial", "comments", "faq", "profile"];
    const targetId = sectionIds[index];
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    if (index === 2) {
      setIsQuestionsOpen(true);
    }
    if (index === 3) {
      setIsLeaderboardOpen(true);
    }
  };

  return (
    <div className="mt-10 mb-80 sm:mb-0">
      <div className="fixed sm:relative w-full m-0 top-0 bg-bg pr-6 z-20 py-2">
        <div className="flex sm:hidden">
          <BreadcrumbWithCustomSeparator />
        </div>
        <h1 className="text-black sm:fs-[4rem] text-xl sm:text-3xl font-bold mb-5 mt-2 sm:mt-0">
          Starting SEO as Your Home
        </h1>
        <div className="relative w-auto h-[13rem] sm:h-[30rem] m-0 z-10 sm:z-0 mt-3 sm:mt-0">
          {!play && (
            <img
              src="/img/poster.png"
              alt="Video Poster"
              className="absolute w-full h-full object-cover cursor-pointer"
              onClick={() => setPlay(true)}
            />
          )}
          {play && (
            <iframe
              className="w-full h-full object-cover"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)"
              src="https://www.youtube.com/embed/UvqAAfWCJGg?autoplay=1"
            ></iframe>
          )}
        </div>
        <div className="w-100 mt-5 flex gap-5">
          {socialIcons.map((Icon, idx) => (
            <div
              key={idx}
              className="text-gray-600 border-[1px] border-gray-400 p-3 rounded-full cursor-pointer hover:bg-gray-400/20 text-lg"
              onClick={() => handleScroll(idx)}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
