import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="quiz-footer p-3 m-t-3 row-flex no-wrap">
      <div className="contact-socials m-v-1 m-r-3">
        <a className="icon-btn footer-icon sub-heading p-1" target="_black" href="mailto:nehaguptang.ng@gmail.com">
          <i className="fa fa-envelope" title="envelope"></i>
        </a>
        <a className="icon-btn footer-icon sub-heading p-1" target="_black" href="https://www.github.com/nayyyhaa">
          <i className="fa fa-github" title="github"></i>
        </a>
        <a className="icon-btn footer-icon sub-heading p-1" target="_black" href="https://www.twitter.com/nayyyhaa">
          <i className="fa fa-twitter" title="twitter"></i>
        </a>
        <a className="icon-btn footer-icon sub-heading p-1" target="_black" href="https://www.instagram.com/nehacode">
          <i className="fa fa-instagram" title="instagram"></i>
        </a>
      </div>
      <p>Made with ❤️ by Neha Gupta</p>
    </footer>
  );
};
