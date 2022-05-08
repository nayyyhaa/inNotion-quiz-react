import { useUser } from "contexts";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Homepage } from "./pages";

function App() {
  const { userData } = useUser();
  return (
    <div className={`${userData.isDark ? "dark" : ""} content`}>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
