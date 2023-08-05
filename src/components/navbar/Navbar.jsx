import "./Navbar.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
