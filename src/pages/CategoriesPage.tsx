import { QuizCard } from "components";
import { useQuiz } from "contexts";
import { Link, useParams } from "react-router-dom";

export const CategoriesPage = () => {
  const {
    quizData: { quiz },
  } = useQuiz();
  const { id } = useParams();
  const categoryQuizes = quiz.filter(({ category }) => category === id);
  return (
    <>
      <h2 className="title colored-text h1 m-v-3 centered-text">
        <span className="circle"></span>
        {`${id?.[0]?.toUpperCase()}${id?.slice(1)}`} Quizes
      </h2>
      <div className="container games-grid grid-resp-col m-auto p-v-2 w-80p">
        {categoryQuizes?.map((card) => (
          <QuizCard key={card._id} card={card} />
        ))}
      </div>
      <Link to="/" className="col-flex w-40p m-auto m-t-3">
        <button className="btn primary-btn centered-text">
          <span>Back to Homepage</span>
        </button>
      </Link>
    </>
  );
};
