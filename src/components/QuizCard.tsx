import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";

export const QuizCard = ({ card }: any) => {
  const { link, img, title, description, category } = card;
  return (
    <div className="card vd-card left-text col-flex flex-start w-30rm m-2">
      <img className="card-img full-wd" src={img} alt={category} />
      <div className="card-header-text col-flex flex-start text-wrap p-2">
        <h2 className="card-title colored-text h3 m-b-1">{title}</h2>
        <p className="sub-heading m-b-1">{description}</p>
      </div>
      <div className="card-actions p-2 row-flex full-wd">
        <div className="card-btns">
          <Link to={link} className="btn primary-btn row-flex no-wrap m-r-1 w-40p">
            <BsCaretRightFill />
            <span className="p-l-1">Play</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
