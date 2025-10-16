"use client";

import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Comments({
  title = "Comments",
  comments = [
    {
      id: 1,
      avatar: "/img/img1.jpg",
      name: "John Smith",
      date: "Oct 10,2021",
      content:
        "This is a sample comment. It demonstrates how the comment content appears below the title and date. It can span multiple lines if it's long enough.",
    },
    {
      id: 2,
      avatar: "/img/img2.jpg",
      name: "Emily Johnson",
      date: "Oct 10,2021",
      content: "A shorter comment just to show the layout.",
    },
    {
      id: 3,
      avatar: "/img/img3.jpg",
      name: "Michael Brown",
      date: "Oct 10,2021",
      content:
        "Another example comment to show how longer text wraps properly and maintains consistent spacing and readability.",
    },
  ],
}) {
  const [commentsList, setCommentsList] = useState(comments);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const randomNum = Math.floor(Math.random() * 3) + 1;
    const newCommentObj = {
      id: Date.now(),
      avatar: `/img/img${randomNum}.jpg`,
      name: "Guest User",
      date: new Date().toISOString().split("T")[0],
      content: newComment.trim(),
    };
    setCommentsList((prev) => [newCommentObj, ...prev]);
    setNewComment("");
  };

  return (
    <section className="mt-9">
      <h3 className="text-2xl text-black font-semibold mb-9">{title}</h3>

      <ul className="space-y-4 mb-8">
        {commentsList.map((c, index) => (
          <li
            key={c.id}
            className={`flex gap-5 items-start p-3 rounded-lg bottom-1 ${
              index !== commentsList.length - 1
                ? "border-b border-gray-300"
                : ""
            }`}
            aria-labelledby={`comment-title-${c.id}`}
          >
            <img
              src={c.avatar}
              alt={`Avatar of ${c.name}`}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4
                  id={`comment-title-${c.id}`}
                  className="font-medium text-sm text-black"
                >
                  {c.name}
                </h4>
              </div>
              <small className="block text-xs  text-gray-500 mt-1">
                {c.date}
              </small>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed ">
                {c.content}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a Comment"
          className="w-auto sm:w-full h-52 p-5 border border-gray-300 rounded-xl outline-none resize-none text-sm"
          rows="4"
        />
        <button
          type="submit"
          className="self-start bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-xl text-sm font-medium transition-colors outline-none"
        >
          <div className="flex justify-center items-center gap-2">
            <small className="fw-semibold text-base">Submit Review</small>
            <FaLongArrowAltRight />
          </div>
        </button>
      </form>
    </section>
  );
}
