import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useUser } from "contexts";

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { toogleTheme } = useUser();

  return (
    <div className="header header-grid fixed-header row-flex">
      <nav className="navbar row-flex">
        <Link className="m-l-3" to="/">
          <h3 className="logo">
            in.notion <span className="text-shd">Quiz</span>
          </h3>
        </Link>
        <ul className={`nav-items row-flex no-bullet ${openNav ? "show-nav" : ""}`}>
          <li className="btn nav-link-btn h3 m-v-2 m-r-3">
            <Link to="/" onClick={() => setOpenNav(false)}>
              Leaderboard
            </Link>
          </li>
          <li className="btn nav-link-btn h3 m-v-2 m-r-3">
            <Link to="/" onClick={() => setOpenNav(false)}>
              Rules
            </Link>
          </li>
        </ul>

        <ul className="row-flex no-bullet">
          <li className="dark-mode icon-toggle icon-btn rd-bdr grid-ctr colored-text m-r-3" onClick={toogleTheme}></li>
          <li className="nav-icon-btn icon-btn rd-bdr grid-ctr wt-text m-r-3">
            <Link to="/profile" className="grid-ctr">
              <FaUser />
              <span className="nav-icon-text h6 cursor wt-text">Profile</span>
            </Link>
          </li>
          <li
            className="hamburger icon-toggle icon-btn rd-bdr grid-ctr colored-text m-r-3"
            onClick={() => setOpenNav((prev) => !prev)}
          >
            {openNav ? <FaTimes /> : <FaBars />}
          </li>
        </ul>
      </nav>
    </div>
  );
};
