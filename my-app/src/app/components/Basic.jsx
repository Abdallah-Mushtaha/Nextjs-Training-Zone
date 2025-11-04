"use client";
import React, { useState } from "react";
import { BreadcrumbWithCustomSeparator } from "./BreadcrumbDemo";
import Videos from "./Video";
import CourseMaterial from "./CourseMaterial";
import Comments from "./Comments";
import Aside from "./aside";
import Questions from "./Questions";
import Leaderboard from "./Leaderboard";

export default function Basic() {
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  return (
    <div className="text-gray-500 flex-col justify-start items-center">
      <div id="profile"></div>
      <div id="faq"></div>

      <Questions
        isOpen={isQuestionsOpen}
        onClose={() => setIsQuestionsOpen(false)}
      />

      <Leaderboard
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />

      <BreadcrumbWithCustomSeparator />

      <Videos
        setIsQuestionsOpen={setIsQuestionsOpen}
        setIsLeaderboardOpen={setIsLeaderboardOpen}
      />

      <div id="courseMaterial">
        <CourseMaterial />
      </div>

      <div className="block sm:hidden">
        <Aside />
      </div>

      <div id="comments">
        <Comments />
      </div>
    </div>
  );
}
