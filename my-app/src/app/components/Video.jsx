"use client";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Videos() {
  const socialIcons = [FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube];
  const [play, setPlay] = useState(false);

  return (
    <div className="mt-10">
      <h1 className="text-black sm:fs-[4rem] text-xl sm:text-3xl font-bold mb-5">
        Starting SEO as Your Home
      </h1>

      <div className="relative w-auto h-[30rem]">
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

      <div className=" w-100 mt-5 flex gap-5">
        {socialIcons.map((Icon, idx) => (
          <div
            key={idx}
            className="text-gray-600 border-[1px] border-gray-400 p-3 rounded-full cursor-pointer hover:bg-gray-400/20"
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
}
