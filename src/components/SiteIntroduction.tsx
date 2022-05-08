import mindfullness from "toolkit/assets/mindfulness.svg";

export const SiteIntroduction = () => {
  return (
    <header className="site-header row-flex p-t-3 p-h-1 m-b-5">
      <div className="introduction m-h-1">
        <h1 className="title lg-text">
          inNotion <span className="colored-text lg-text bg h1 text-stroke">Quiz</span>
        </h1>
        <p className="description h3 m-t-3">Find how much you are in touch with your mind & soul.</p>
        <a href="#categories">
          <button className="btn primary-btn m-v-2">Browse Quizes</button>
        </a>
      </div>
      <img className="site-img" src={mindfullness} alt="mindfulness" />
    </header>
  );
};
