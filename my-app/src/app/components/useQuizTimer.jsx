"use client";
import { useState, useEffect } from "react";

const useQuizTimer = (onTimeout) => {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(
    2,
    "0"
  )}:${String(timeLeft % 60).padStart(2, "0")}`;
  const timerColor = timeLeft < 30 ? "bg-red-500" : "bg-yellow-500";

  return { timeLeft, formattedTime, timerColor };
};

export default useQuizTimer;
