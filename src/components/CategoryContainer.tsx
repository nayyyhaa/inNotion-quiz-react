import { QuizDataCategory } from "models/models";
import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";

export const CategoryContainer = ({ category }: any) => {
  const { link, img, title, description, color } = category;
  return (
    <Link to={link} className="quiz-category-item cursor left-text p-2 m-v-2 m-h-3">
      <div className="quiz-category-media">
        <img className="quiz-category-img" src={img} alt="meditation" />
      </div>
      <div className="quiz-category-action">
        {title.split(" ").map((el: string) => (
          <h3 key={el} className="title quiz-categorys-title left-text h1">
            {el}
          </h3>
        ))}
        <p className={`cursor quiz-category-btn ${color}-content row-flex no-wrap w-80p h3 p-05`}>
          {description}
          <BsCaretRightFill />
        </p>
      </div>
    </Link>
  );
};
