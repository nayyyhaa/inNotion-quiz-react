import { CategoryContainer, QuizCard, SiteIntroduction } from "../components";
import { quizCategoryData, quizData } from "toolkit/data/quizData";

export const Homepage = () => {
  return (
    <>
      <SiteIntroduction />
      <main className="m-auto">
        <section id="categories" className="section centered-text grid-ctr w-95p m-t-3 m-b-5">
          <h2 className="title colored-text h1 m-v-1">
            <span className="circle"></span>Let's play <span className="complementary-color-text">Quiz</span>
          </h2>
          <div className="quiz-category-container grid-3-col full-wd m-v-2 m-b-5">
            {quizCategoryData?.map((category) => (
              <CategoryContainer key={category._id} category={category} />
            ))}
          </div>
        </section>
        <section className="section games-section centered-text grid-ctr">
          <h2 className="title colored-text h1 m-v-2">
            <span className="circle"></span>Our favourite quizes
          </h2>
          <div className="container games-grid grid-resp-col w-80p p-v-2">
            {quizData?.map((card) => (
              <QuizCard key={card._id} card={card} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
