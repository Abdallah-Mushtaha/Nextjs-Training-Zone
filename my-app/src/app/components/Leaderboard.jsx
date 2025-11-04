"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Medal } from "lucide-react";

export default function Leaderboard({ isOpen, onClose }) {
  if (!isOpen) return null;

  const leaderboard = [
    {
      name: "Ali Hassan",
      progress: 98,
      icon: <Trophy className="text-amber-400 w-5 h-5" />,
    },
    {
      name: "Rania ElSayed",
      progress: 92,
      icon: <Medal className="text-gray-400 w-5 h-5" />,
    },
    {
      name: "Mostafa Nader",
      progress: 86,
      icon: <Medal className="text-lime-500 w-5 h-5" />,
    },
    { name: "You", progress: 80, you: true },
    { name: "Hana Ahmed", progress: 75 },
    { name: "Omar Magdy", progress: 70 },
    { name: "Laila Farid", progress: 65 },
    { name: "Khaled Nour", progress: 60 },
  ];

  const letter = (name) => name.charAt(0).toUpperCase();

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-labelledby="leaderboard-title"
        aria-describedby="leaderboard-desc"
        className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-bg rounded-2xl border shadow-2xl max-w-lg w-[90%] h-[90vh] overflow-hidden flex flex-col relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-md opacity-70 hover:opacity-100 transition"
          >
            <X className="w-5 h-5 text-gray-500" />
            <span className="sr-only">Close</span>
          </button>

          <div className="text-center pt-10 pb-4 px-4 border-b border-gray-100 bg-gradient-to-r from-green-100 to-lime-100">
            <h1
              id="leaderboard-title"
              className="text-2xl sm:text-3xl font-bold text-[#1E3D32] mb-1"
            >
              Frontend Development Progress
            </h1>
            <h2 className="text-lg font-semibold text-gray-700">Leaderboard</h2>
          </div>

          <div className="bg-[#F3FBF7] text-center p-4 mx-4 mt-4 rounded-lg flex items-center justify-center gap-3 text-[#2E4A3E] font-medium text-sm">
            <p>
              ممتاز 👏 تقدمك أفضل من{" "}
              <span className="font-bold text-green-600">75%</span> من الطلبة —
              استمر للأعلى!
            </p>
          </div>

          <div className="flex-1 overflow-auto px-4 mt-6 pb-8 space-y-3 scrollbar-hide">
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>

            {leaderboard.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center gap-3 p-4 rounded-lg border border-gray-100 bg-white hover:bg-green-50 transition-all duration-300 ${
                  item.you ? "bg-green-100 border-green-400 shadow-md" : ""
                }`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-lime-400 text-gray-800 font-semibold text-sm">
                  {index < 3 ? item.icon : index + 1}
                </div>

                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-lime-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {letter(item.name)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {item.name}
                    </h3>
                    {item.you && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded-full">
                        You
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-lime-600 rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 min-w-[40px] text-right">
                      {item.progress}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
