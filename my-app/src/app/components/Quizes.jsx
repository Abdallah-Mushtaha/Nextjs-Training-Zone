"use client";
import React, { useState, useEffect, useCallback } from "react";
import { loadAnswers, saveAnswers } from "./useLocalStorage";
import useQuizTimer from "./useQuizTimer";
import { MdArrowBackIos } from "react-icons/md";

const quizData = [
  {
    id: 1,
    questionText:
      "Among the following states of India, which one has the oldest rock formations in the country?",
    options: ["Assam", "Bahar", "Kamaltake", "Uttar Pradesh"],
  },
  {
    id: 2,
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    id: 3,
    questionText: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
  },
];

const TOTAL_TIME_SECONDS = 90;

const DynamicQuizPopup = ({ onClose }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(loadAnswers(quizData));
  const { timeLeft, formattedTime, timerColor } = useQuizTimer(
    TOTAL_TIME_SECONDS,
    () => {
      alert("Time's up! The quiz has been automatically submitted.");
      handleSubmitQuiz();
    }
  );

  const handleOptionSelect = (selectedOptionText) => {
    const currentQId = quizData[currentQIndex].id;
    const newAnswers = { ...userAnswers, [currentQId]: selectedOptionText };
    setUserAnswers(newAnswers);
    saveAnswers(newAnswers);
  };

  const handleSubmitQuiz = useCallback(() => {
    saveAnswers(userAnswers);
    onClose();
  }, [userAnswers, onClose]);

  const goToNext = () => {
    if (currentQIndex < quizData.length - 1) setCurrentQIndex((i) => i + 1);
    else handleSubmitQuiz();
  };

  const goToPrevious = () => {
    if (currentQIndex > 0) setCurrentQIndex((i) => i - 1);
  };

  const currentQuestion = quizData[currentQIndex];
  const selectedAnswer = userAnswers[currentQuestion.id];
  const isFirst = currentQIndex === 0;
  const isLast = currentQIndex === quizData.length - 1;

  return (
    <div className="fixed inset-0 bg-indigo-600/90 text-black flex flex-col items-center justify-center z-20 p-9 !m-0 border-0">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-white text-3xl font-bold p-1  rounded-full w-8 h-8 flex items-center justify-center my-auto leading-none  transition z-10"
      >
        <MdArrowBackIos />
      </button>

      <div className="flex justify-center -mt-6">
        <div
          className={`${timerColor} text-white font-bold text-lg px-6 py-2 rounded-full shadow-md shadow-yellow-500`}
        >
          ⏱ {formattedTime}
        </div>
      </div>

      <div className="flex justify-center space-x-3 mt-6 mb-4 px-6">
        {quizData.map((q, index) => (
          <div
            key={q.id}
            onClick={() => setCurrentQIndex(index)}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm cursor-pointer transition ${
              index === currentQIndex
                ? "bg-slate-50 text-gray-400 shadow-lg ring-4 ring-indigo-300"
                : userAnswers[q.id]
                ? "bg-gray-900/60 text-white"
                : "bg-gray-200 text-gray-500 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 p-0  sm:p-5 ">
        <div className="p-8 pt-4">
          <h2 className="text-xl font-normal text-gray-800 mb-8">
            <span className="font-bold text-2xl mr-2 text-indigo-600">
              {currentQuestion.id}.
            </span>
            {currentQuestion.questionText}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, i) => {
              const isSelected = option === selectedAnswer;
              return (
                <div
                  key={i}
                  onClick={() => handleOptionSelect(option)}
                  className={`flex items-center p-5 rounded-xl cursor-pointer shadow-md transition ${
                    isSelected
                      ? "bg-indigo-600 text-white ring-4 ring-indigo-300"
                      : "bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-indigo-400"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border-2 mr-4 ${
                      isSelected
                        ? "border-white bg-indigo-600"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-3 h-3 bg-white flex justify-center items-center my-1 mx-auto rounded-full" />
                    )}
                  </div>
                  <span className="text-lg font-medium border-l-2 px-3">
                    {option}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between px-6 pb-4 border-t border-gray-100 space-x-4">
          <button
            onClick={goToPrevious}
            disabled={isFirst}
            className={`w-full py-3 rounded-xl font-semibold shadow-md ${
              isFirst
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            }`}
          >
            Previous
          </button>

          <button
            onClick={isLast ? handleSubmitQuiz : goToNext}
            className={`w-full py-3  rounded-xl font-semibold shadow-md text-white  ${
              isLast
                ? "bg-green-600 hover:bg-green-700"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isLast ? "Submit Quiz" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicQuizPopup;
