import "./Recipient.css";
import Women_logo from "./Images/Women_logo.jpg";
import logo from "./Images/logo.png";
import chat from "./Images/chat.png";
import report from "./Images/report.png";
export default function Recipient() {
  return (
    <>
      <nav>
        <div className="profile">
          <img className="pic" src={Women_logo} alt="Nothing" />
          <h3 className="head">About Profile</h3>
          <div className="Details">
            <div className="Donar-record">
              <div className="Donated">
                <p className="Don">13+</p>
              </div>
              <p>Donated</p>
              <div className="Rating">
                <p className="r">4</p>
              </div>
              <p>Ratings</p>
            </div>
            <div className="Rec-details">
              <p>ID : </p>
              <p>Name :</p>
              <p>Address :</p>
              <p>Contact Number : </p>
              <p>Donar Status : </p>
            </div>
          </div>
          <div className="Downbar">
            <div className="combo">
              <img className="Call" src={logo} alt="Nothing" />
              <button className="combo-button">Phone</button>
            </div>
            <div className="combo">
              <img className="chat" src={chat} alt="Nothing" />
              <textarea className="combo-button1" type="Text" name="Chat" />
              <button className="combo-button">chat</button>
            </div>
            <div className="combo">
              <img className="report" src={report} alt="nothing" />
              <button className="combo-button">Report</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
