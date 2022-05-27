import { db } from "config/firebase-config";
import { useQuiz, useUser } from "contexts";
import { doc, setDoc } from "firebase/firestore";
import { InfinitySpin, Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import noData from "toolkit/assets/no-data.svg";
import { formatDate } from "toolkit/utils/formatDate";

export const ScoresPage = () => {
  const {
    clearScores,
    isLoading,
    quizData: { scoreData },
  } = useQuiz();
  const { userData } = useUser();

  const clearScoresHandler = async () => {
    const resultRef = doc(db, "scores", userData?.user?.uid);
    try {
      await setDoc(resultRef, {
        scores: [],
      });
      clearScores();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="score-page full-wd align-start m-auto p-h-2 p-v-3">
      <div className="row-flex">
        <h2 className="title colored-text h1 m-v-2 centered-text">
          <span className="circle"></span>
          Scoreboard
        </h2>
        <button className="btn primary-btn m-v-2" onClick={clearScoresHandler}>
          Clear Scores
        </button>
      </div>
      {isLoading ? (
        <div className="grid-ctr m-v-5">
          <Oval
            ariaLabel="loading-indicator"
            height={50}
            width={50}
            strokeWidth={5}
            color="purple"
            secondaryColor="pink"
          />
          <p className="m-v-1">loading...</p>
        </div>
      ) : (
        <>
          {scoreData?.length > 0 ? (
            <>
              <div className="option option-header row-flex no-wrap score-bar">
                <p className="w-40p">
                  <strong>Quiz Name</strong>
                </p>
                <p className="date-field w-20p">
                  <strong>Date</strong>
                </p>
                <p className="w-20p">
                  <strong>Score</strong>
                </p>
                <p className="w-10p">
                  <strong>Action Button</strong>
                </p>
              </div>
              {scoreData?.map(({ title, score, date, _id }, idx) => (
                <div key={idx} className="option row-flex no-wrap score-bar">
                  <p className="w-40p">{title}</p>
                  <p className="date-field w-20p">{formatDate(date)}</p>
                  <p className="w-20p">{score}</p>
                  <Link to={`/rules/${_id}`}>
                    <button className="btn primary-btn w-10p">
                      <span>Play again</span>
                    </button>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <div className="full-wd m-auto row-flex align-start p-v-2 p-h-5 m-t-3">
              <div className="grid-ctr m-v-5">
                <img className="w-60p no-video" src={noData} alt="noData" />
                <p className="m-t-3">No score data available!</p>
                <p className="m-t-3">
                  Choose game to see your scoreboard{" "}
                  <Link to="/" className="colored-text">
                    Here
                  </Link>
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
