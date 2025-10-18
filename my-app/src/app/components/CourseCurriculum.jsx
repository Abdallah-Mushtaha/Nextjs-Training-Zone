"use client";
import React, { useState } from "react";
import { GiPadlock } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import DynamicQuizPopup from "./Quizes";

const weekData = [
  {
    week: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { title: "Defining Functions", unlocked: false },
      { title: "Function Parameters", unlocked: false },
      {
        title: "Return Values From Functions",
        unlocked: true,
        question: 2,
        duration: "10 MINUTES",
      },
      { title: "Global Variable and Scope", unlocked: false },
      { title: "Newer Way of creating a Constant", unlocked: false },
      { title: "Constants", unlocked: false },
    ],
  },
  {
    week: "Week 2-3",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { title: "Defining Functions", unlocked: false },
      { title: "Function Parameters", unlocked: false },
      {
        title: "Return Values From Functions",
        unlocked: true,
        question: 2,
        duration: "10 MINUTES",
      },
      { title: "Global Variable and Scope", unlocked: false },
      { title: "Newer Way of creating a Constant", unlocked: false },
      { title: "Constants", unlocked: false },
    ],
  },
  {
    week: "Week 9-5",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { title: "Defining Functions", unlocked: false },
      { title: "Function Parameters", unlocked: false },
      {
        title: "Return Values From Functions",
        unlocked: true,
        question: 2,
        duration: "10 MINUTES",
      },
      { title: "Global Variable and Scope", unlocked: false },
      { title: "Newer Way of creating a Constant", unlocked: false },
      { title: "Constants", unlocked: false },
    ],
  },
];

const stageTitles = ["Establishment", "Development", "Mastery"];

const CourseCurriculum = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  const openQuiz = () => setQuizOpen(true);
  const closeQuiz = () => setQuizOpen(false);

  const toggleItem = (value) => setOpenItem(openItem === value ? null : value);

  return (
    <div className="max-w-4xl mx-auto space-y-8 mt-7 w-full">
      <div className="hidden md:flex flex-wrap w-full space-y-8">
        {weekData.map((week, idx) => (
          <WeekCard
            key={idx}
            week={week.week}
            description={week.description}
            lessons={week.lessons}
            onLessonClick={openQuiz}
          />
        ))}
      </div>

      <div className="block md:hidden w-screen -mx-4 sm:-mx-6 px-0">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4 px-4 sm:px-6"
          value={openItem}
          onValueChange={toggleItem}
        >
          {weekData.map((week, idx) => (
            <AccordionItem
              key={idx}
              value={`week-${idx}`}
              className="border-none shadow-xl rounded-lg overflow-hidden bg-white w-full"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-bold tracking-tight text-gray-800 w-full flex justify-between items-center hover:no-underline focus:no-underline [&>svg]:hidden">
                <span>{stageTitles[idx]}</span>

                <div className="flex-shrink-0">
                  {openItem === `week-${idx}` ? (
                    <AiOutlineMinus className="text-gray-600 w-5 h-5" />
                  ) : (
                    <AiOutlinePlus className="text-gray-600 w-5 h-5" />
                  )}
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pt-2 pb-6">
                <p className="text-sm text-gray-500 mb-4">{week.description}</p>
                <ul className="space-y-3">
                  {week.lessons.map((lesson, i) => (
                    <LessonItem
                      key={i}
                      title={lesson.title}
                      question={lesson.question}
                      duration={lesson.duration}
                      locked={!lesson.unlocked}
                      onClick={lesson.unlocked ? openQuiz : undefined}
                    />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {quizOpen && <DynamicQuizPopup onClose={closeQuiz} />}
    </div>
  );
};

const WeekCard = ({ week, description, lessons, onLessonClick }) => (
  <div className="bg-white shadow-xl p-6 w-full">
    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-gray-800">
      {week}
    </h2>
    <p className="text-sm text-gray-500 mb-4">{description}</p>
    <ul className="space-y-3">
      {lessons.map((lesson, idx) => (
        <LessonItem
          key={idx}
          title={lesson.title}
          question={lesson.question}
          duration={lesson.duration}
          locked={!lesson.unlocked}
          onClick={lesson.unlocked ? onLessonClick : undefined}
        />
      ))}
    </ul>
  </div>
);

const LessonItem = ({ title, duration, locked, question, onClick }) => (
  <li
    onClick={onClick}
    className={`flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 border-b border-gray-100 last:border-b-0 rounded-md cursor-pointer
      ${
        locked
          ? "bg-gray-50 cursor-not-allowed"
          : "hover:bg-gray-50 transition duration-150"
      }`}
  >
    <div className="flex items-center space-x-3 min-w-0">
      <HiOutlineDocumentText
        className={`w-5 h-5 flex-shrink-0 ${
          locked ? "text-gray-400" : "text-gray-700"
        }`}
      />
      <span
        className={`text-sm truncate ${
          locked ? "text-gray-400" : "text-gray-700 font-medium"
        }`}
      >
        {title}
      </span>
    </div>
    <div className="flex justify-end items-center flex-shrink-0 space-x-2 text-xs font-semibold">
      {question && (
        <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
          {question} QUESTION
        </span>
      )}
      {duration ? (
        <span className="text-red-600 bg-red-100 px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
          {duration}
        </span>
      ) : locked ? (
        <GiPadlock className="text-gray-500 w-4 h-4" />
      ) : null}
    </div>
  </li>
);

export default CourseCurriculum;
