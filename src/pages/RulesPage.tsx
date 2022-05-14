import { useQuiz } from "contexts";
import { Link, useParams } from "react-router-dom";

export const RulesPage = () => {
  const {
    quizData: { quiz },
  } = useQuiz();
  const { id } = useParams();
  const currentQuiz = quiz.find(({ _id }) => _id === id);

  return (
    <main className="form-content full-wd grid-ctr m-auto p-v-5">
      <h2 className="title centered-text colored-text h1 m-v-2">
        <span className="circle"></span>
        {currentQuiz?.title}
      </h2>
      <div className="form-card w-40rm col-flex">
        <ul className="card left-text no-bullet row-flex text-wrap box-shd w-40rm p-h-2 p-v-4">
          <li className="colored-text h2 title m-b-2">RULES</li>
          <li className="w-95p m-b-2">🎯 Total number of questions: 5</li>
          <li className="w-95p m-b-2">
            🎯 Correct answer will give <span className="green-text">+2 points</span>.
          </li>
          <li className="w-95p m-b-2">
            🎯 Wrong answer will deduct <span className="red-text">-1 point</span>.
          </li>
          <li className="w-95p m-b-2">🎯 Score atleast 70% to win.</li>
          <Link to={`/questions/${id}`} className="btn primary-btn centered-text w-95p m-h-1">
            <span>Let's Begin</span>
          </Link>
        </ul>
      </div>
    </main>
  );
};
