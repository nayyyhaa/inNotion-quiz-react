import { useUser } from "contexts";
import { useScrollToTop, usePageViewTracker } from "custom-hooks";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Homepage, RulesPage, QuestionPage, ResultPage } from "./pages";

function App() {
  const { userData } = useUser();
  usePageViewTracker();
  useScrollToTop();
  return (
    <div className={`${userData.isDark ? "dark" : ""} content`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rules/:id" element={<RulesPage />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
        <Route path="/result/:id" element={<ResultPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
