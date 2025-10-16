export const loadAnswers = (quizData) => {
  try {
    const saved = localStorage.getItem("quizAnswers");
    if (saved) {
      const savedAnswers = JSON.parse(saved);
      return quizData.reduce(
        (acc, q) => ({ ...acc, [q.id]: savedAnswers[q.id] || null }),
        {}
      );
    }
  } catch (error) {
    console.error("Error loading answers:", error);
  }
  return quizData.reduce((acc, q) => ({ ...acc, [q.id]: null }), {});
};

export const saveAnswers = (answers) => {
  try {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
  } catch (error) {
    console.error("Error saving answers:", error);
  }
};
