import { db } from "config/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import { QuizCardData } from "models/models";
import { createContext, useState, useContext, useEffect } from "react";
import { quizData } from "toolkit/data/quizData";
import { useUser } from "./UserContext";

interface QuizType {
  quiz: QuizCardData[];
  userAnswer: { [key: number]: any };
  scoreData: { [key: string]: any }[];
}

interface QuizContextState {
  quizData: QuizType;
  setUserAnswer: (arg0: number, arg1: number) => void;
  clearScores: () => void;
  isLoading: boolean;
}

const contextDefaultValues: QuizContextState = {
  quizData: { quiz: quizData, userAnswer: {}, scoreData: [] },
  setUserAnswer: () => {},
  clearScores: () => {},
  isLoading: true,
};

const QuizContext = createContext<QuizContextState>(contextDefaultValues);

const QuizProvider = ({ children }: any) => {
  const [quizData, setQuizContent] = useState(contextDefaultValues.quizData);
  const { userData } = useUser();
  const [isLoading, setIsLoading] = useState(contextDefaultValues.isLoading);

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

  const clearScores = () => {
    setQuizContent((prev: any) => ({
      ...prev,
      scoreData: [],
    }));
  };

  useEffect(() => {
    if (userData.user.uid) {
      const resultRef = doc(db, "scores", userData.user.uid);
      const unsubscribe = onSnapshot(resultRef, (scores) => {
        if (scores.exists())
          setQuizContent((prev: any) => ({
            ...prev,
            scoreData: scores.data() ? [...scores.data().scores] : [],
          }));
          setIsLoading(false)
      });
      return () => {
        unsubscribe();
      };
    }
  }, [userData.user.uid]);

  return (
    <QuizContext.Provider value={{ quizData, setUserAnswer, clearScores, isLoading }}>{children}</QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
