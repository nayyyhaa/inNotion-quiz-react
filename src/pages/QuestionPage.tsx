import { useQuiz } from "contexts";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const QuestionPage = () => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const {
    quizData: { quiz, userAnswer },
    setUserAnswer,
  } = useQuiz();
  const { id } = useParams();
  const currentQuiz = quiz.find(({ _id }) => _id === id);

  return (
    <>
      <main className="form-content full-wd grid-ctr m-auto p-h-2 p-v-5">
        <h2 className="title colored-text h1 m-v-2 centered-text">
          <span className="circle"></span>
          {currentQuiz?.title}
        </h2>
        <div className="form-card w-50rm col-flex">
          <ul className="card question-card left-text no-bullet row-flex text-wrap box-shd w-50rm m-v-2 p-h-2 p-v-4">
            <li className="sub-heading left-text w-95p m-b-1">Question: {questionIdx + 1}</li>
            <li className="question w-95p m-b-2">{currentQuiz?.questions?.[questionIdx].question}</li>
            {currentQuiz?.questions?.[questionIdx].options.map((option, idx) => (
              <li
                key={option}
                className={`option ${userAnswer?.[questionIdx] === idx ? "select-option" : ""} cursor w-95p p-1 m-b-1`}
                onClick={() => setUserAnswer(questionIdx, idx)}
              >
                {option}
              </li>
            ))}
            {questionIdx + 1 < (currentQuiz?.questions?.length || 0) ? (
              <button
                onClick={() => setQuestionIdx((prev) => prev + 1)}
                className={`btn primary-btn ${
                  Object.keys(userAnswer).length === questionIdx ? "disabled-btn" : ""
                }  centered-text w-95p m-h-1`}
              >
                <span>Next</span>
              </button>
            ) : (
              <Link to={`/result/${id}`}>
                <button
                  className={`btn primary-btn ${
                    Object.keys(userAnswer).length === questionIdx ? "disabled-btn" : ""
                  }  centered-text w-95p m-h-1`}
                >
                  <span>Finish</span>
                </button>
              </Link>
            )}
          </ul>
        </div>
      </main>
    </>
  );
};
