import { Link } from "react-router-dom";
import symbol from "../Images/symbol.png";
import Women_logo from "../Images/Women_logo.jpg"
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="sample-div">
          <img className="symbol" src={symbol} alt="Nothing to show" />
          <p className="title">Safe . Trusted . Lifesaving</p>
        </div>
        <div className="right-nav">
          {" "}
          <li>
            <Link to="/H" className="active-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="active-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/recipient" className="active-link">
              Contribute milk
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="active-link">
              Request milk
            </Link>
          </li>
        </div>
        <div className="Username">
          <img className="logo" src={Women_logo} alt="nothing" />
          <p className="para">Recipient Username</p>
        </div>
      </nav>
    </>
  );
}
