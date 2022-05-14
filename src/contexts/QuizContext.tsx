import { QuizCardData } from "models/models";
import { createContext, useState, useContext } from "react";
import { quizData } from "toolkit/data/quizData";

interface QuizType {
  quiz: QuizCardData[];
  userAnswer: { [key: number]: any };
}

interface QuizContextState {
  quizData: QuizType;
  setUserAnswer: (arg0: number, arg1: number) => void;
}

const contextDefaultValues: QuizContextState = {
  quizData: { quiz: quizData, userAnswer: {} },
  setUserAnswer: () => {},
};

const QuizContext = createContext<QuizContextState>(contextDefaultValues);

const QuizProvider = ({ children }: any) => {
  const [quizData, setQuizContent] = useState(contextDefaultValues.quizData);

  const setUserAnswer = (questionIdx: number, idx: number) =>
    idx > -1
      ? setQuizContent((prev: any) => ({
          ...prev,
          userAnswer: {
            ...prev.userAnswer,
            [questionIdx]: idx,
          },
        }))
      : setQuizContent((prev: any) => ({
          ...prev,
          userAnswer: {},
        }));

  return <QuizContext.Provider value={{ quizData, setUserAnswer }}>{children}</QuizContext.Provider>;
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
