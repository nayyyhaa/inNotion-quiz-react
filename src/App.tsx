import "react-toastify/dist/ReactToastify.css";
import { useUser } from "contexts";
import { useScrollToTop, usePageViewTracker } from "custom-hooks";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "routes/PrivateRoute";
import { Footer, Navbar } from "./components";
import {
  Homepage,
  RulesPage,
  QuestionPage,
  ResultPage,
  ProfilePage,
  Authorisation,
  CategoriesPage,
  PageNotFound,
  ScoresPage,
} from "./pages";

function App() {
  const { userData } = useUser();
  usePageViewTracker();
  useScrollToTop();
  return (
    <div className={`${userData.isDark ? "dark" : ""} content`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Authorisation />} />
        <Route path="/signup" element={<Authorisation />} />
        <Route path="/rules/:id" element={<RulesPage />} />
        <Route path="/categories/:id" element={<CategoriesPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/questions/:id" element={<QuestionPage />} />
          <Route path="/result/:id" element={<ResultPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/scores" element={<ScoresPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default App;
