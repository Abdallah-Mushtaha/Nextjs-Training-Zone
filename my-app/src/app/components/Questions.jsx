"use client";
import React, { useEffect, useState } from "react";

export default function Questions({ isOpen, onClose }) {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const randomAvatar = () => `/img/img${Math.floor(Math.random() * 4)}.jpg`;

  useEffect(() => {
    const saved = localStorage.getItem("questions");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setQuestions(
          parsed.map((q) => ({
            ...q,
            avatar: q.avatar || randomAvatar(),
          }))
        );
        return;
      } catch (e) {
        console.error("Error parsing saved questions:", e);
      }
    }

    setQuestions([
      {
        name: "Emma Wilson",
        date: "Nov 4, 2025",
        message: "This is some awesome thinking!",
        avatar: randomAvatar(),
      },
      {
        name: "Cameron Perez",
        date: "Nov 4, 2025",
        message: "What terrific math skills you're showing!",
        avatar: randomAvatar(),
      },
      {
        name: "Emily Johnson",
        date: "Nov 4, 2025",
        message: "You are an amazing writer!",
        avatar: randomAvatar(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (questions.length > 0)
      localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    if (isOpen) setVisibleCount(3);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = newQuestion.trim();
    if (!text) return;

    const newItem = {
      name: "You",
      date: new Date().toLocaleDateString(),
      message: text,
      avatar: randomAvatar(),
    };

    setQuestions((prev) => [newItem, ...prev]);
    setNewQuestion("");
  };

  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <div
      role="dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-desc"
      data-state={isOpen ? "open" : "closed"}
      className="
        bg-bg
        fixed top-1/2 left-1/2 z-50
        grid gap-4
        w-screen h-screen p-8 sm:p-16
        rounded-lg border shadow-lg
        duration-200 transform
        -translate-x-1/2 -translate-y-1/2
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=open]:fade-in-0
        data-[state=closed]:fade-out-0
        data-[state=open]:zoom-in-95
        data-[state=closed]:zoom-out-95
      "
    >
      {/* Header */}
      <header className="flex justify-between items-center mb-2">
        <h2
          id="dialog-title"
          className="text-2xl font-semibold text-gray-800 tracking-tight"
        >
          Questions
        </h2>
        <button
          onClick={onClose}
          className="p-2 rounded hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </header>

      {/* Scrollable Content */}
      <div className="w-full h-full overflow-auto scrollbar-hide">
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        <p className="text-sm text-gray-600 mb-4">
          Showing {Math.min(visibleCount, questions.length)} of{" "}
          {questions.length} comments
        </p>

        {/* Questions List */}
        <div className="divide-y divide-gray-200">
          {questions.slice(0, visibleCount).map((q, i) => (
            <div key={i} className="flex gap-4 py-6">
              <img
                src={q.avatar}
                alt={q.name}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="mb-2">
                  <h3 className="font-semibold text-gray-900">{q.name}</h3>
                  <p className="text-sm text-gray-500">{q.date}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{q.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < questions.length && (
          <div className="py-8 text-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-white border-2 border-teal-500 text-teal-500 font-medium rounded-lg hover:bg-teal-50 transition-colors"
            >
              Load More Questions
            </button>
          </div>
        )}

        {/* Add Question */}
        <form onSubmit={handleSubmit} className="mt-8 mx-8">
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Write your question..."
            rows="4"
            className="w-full p-4 bg-white rounded-xl border focus:ring-2 focus:ring-black shadow-sm resize-none outline-none transition-all  "
          />
          <button
            type="submit"
            disabled={!newQuestion.trim()}
            className="mt-4 px-8 py-3 bg-teal-500 text-white font-medium rounded hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            Submit Question
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
