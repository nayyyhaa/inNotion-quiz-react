import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuiz } from "contexts/QuizContext";

export const usePageViewTracker = () => {
  const location = useLocation();
  const [lastLocation, setLastLocation] = useState("");
  const { setUserAnswer } = useQuiz();

  useEffect(() => {
    if (lastLocation.includes("/result")) setUserAnswer(1, -1);
    setLastLocation(location.pathname);
  }, [location]);

  return [location, lastLocation];
};
