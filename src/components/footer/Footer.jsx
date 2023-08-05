import "./Footer.css";
import logofooter from "../../assets/logofooter.svg";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="content">
        <div className="left">
          <img src={logofooter} alt="Candle Inc logo" />
          <p>
            Your natural candle made for <br /> your home and your wellness.
          </p>
        </div>
        <div className="right">
          <div className="colonne">
            <h3>Discovery</h3>
            <ul>
              <li>New season</li>
              <li>Most searched</li>
              <li>Most selled</li>
            </ul>
          </div>
          <div className="colonne">
            <h3>About</h3>
            <ul>
              <li>Help</li>
              <li>Shipping</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div className="colonne">
            <h3>Info</h3>
            <ul>
              <li>Contact us </li>
              <li>Privacy Policies searched</li>
              <li>Terms & Conditons </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="remerciements">
        <h5>©Candeleaf All Rights Reserved</h5>
        <h5>Coded with ❤️ by Alpha React team</h5>
      </div>
    </footer>
  );
};

export default Footer;
