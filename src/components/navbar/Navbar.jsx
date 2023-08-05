import "./Navbar.css";
import { BsFillPersonFill,BsCart3 } from "react-icons/bs";

import { Link } from "react-router-dom";
import logoNav from "../../assets/logoNav.svg";
const Navbar = () => {
   
  return (
    <nav>
      <div className="partieGauche">
        <Link to="/">
          <img src={logoNav} alt="logo Candles.Inc" />
        </Link>
      </div>
      <div className="centre">
        <h5>Discovery</h5>
        <h5>About</h5>
        <h5>Contact us</h5>
      </div>
      <div className="partieDroit">
        <Link>
          <BsFillPersonFill />
        </Link>
        <Link to="/panier">
          <BsCart3/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
