import "./Navbar.css";
import { BsFillPersonFill,BsCart3 } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logoNav from "../../assets/logoNav.svg";
const Navbar = () => {
  const [candles, setCandles] = useState([]);
  useEffect(() => {
    axios
      .get("panier.json")
      .then((response) => {
        const data = response.data;
        setCandles(data.achats);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [candles]);
  
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
        <Link to="/panier" className="icone">
     <div className="qntte"> {candles.length}</div>
          <BsCart3/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
