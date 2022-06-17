import { db } from "config/firebase-config";
import { useQuiz, useUser } from "contexts";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const ResultPage = () => {
  const {
    quizData: { quiz, userAnswer, scoreData },
  } = useQuiz();
  const { id } = useParams();
  const currentQuiz = quiz.find(({ _id }) => _id === id);
  const noOfCorrectAns: number = currentQuiz?.questions?.filter((el, idx) => userAnswer[idx] === el.answer).length || 0;
  const totalScore: number = noOfCorrectAns * 2 - (5 - noOfCorrectAns);
  const { userData } = useUser();

  useEffect(() => {
    const resultRef = doc(db, "scores", userData?.user?.uid);
    (async function () {
      try {
        await setDoc(resultRef, {
          scores: scoreData
            ? [...scoreData, { title: currentQuiz?.title, score: totalScore, _id: id, date: new Date().toDateString() }]
            : [{ title: currentQuiz?.title, score: totalScore, _id: id, date: new Date().toDateString() }],
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <main className="form-content full-wd grid-ctr m-auto p-h-2 p-v-5">
      <h2 className="title centered-text colored-text m-v-1">
        <span className="circle"></span>
        {currentQuiz?.title}
      </h2>
      <h3 className="h2 centered-text m-v-2">Final Score: {totalScore}/10</h3>
      {totalScore >= 7 ? (
        <h4 className="h3 centered-text green-text m-v-2">Score is &gt;70%, You passed!! 🥳</h4>
      ) : (
        <h4 className="h3 centered-text red-text m-v-2">Score is &lt;70%, Better try again! 🥺</h4>
      )}
      <div className="form-card w-50rm col-flex">
        {currentQuiz?.questions?.map((el, idx) => (
          <ul
            key={idx}
            className="card question-card left-text no-bullet row-flex text-wrap box-shd w-50rm m-v-2 p-h-2 p-v-4"
          >
            <li className="questions-heading w-95p m-b-1 row-flex">
              <p className="sub-heading">Question: {idx + 1}</p>
              <p className="sub-heading">
                Score:{" "}
                {userAnswer[idx] !== el.answer ? (
                  <span className="red-text">-1</span>
                ) : (
                  <span className="green-text">+2</span>
                )}
              </p>
            </li>
            <li className="question w-95p m-b-2">{el.question}</li>
            {el.options.map((op, opIdx) => (
              <li
                key={opIdx}
                className={`w-95p p-1 m-b-1 ${
                  userAnswer[idx] === opIdx && userAnswer[idx] !== el.answer && "red-content"
                } ${opIdx === el.answer && "green-content"} ${
                  userAnswer[idx] !== opIdx && opIdx !== el.answer && "option"
                }
                `}
              >
                {op}
              </li>
            ))}
          </ul>
        ))}
        <Link to="/" className="btn primary-btn centered-text w-80p m-t-3">
          <span>Back</span>
        </Link>
      </div>
    </main>
  );
};
