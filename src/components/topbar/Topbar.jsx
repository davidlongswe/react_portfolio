import "./topbar.scss";
import { Mail, Person } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            DEL.
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>+46 70 257 23 77</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span>davidelfvinglong@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
