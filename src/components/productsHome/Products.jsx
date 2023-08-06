import { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";
const Products = () => {
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        const data = response.data;
        setCandles(data.candles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="products">
      <h2>Products</h2>
      <p>Order it for you beloved ones </p>
      <div className="productCards">
        {candles.map((candle, index) => (
        <Link to={`/details/${candle.key}`}>
          <div key={index} className="card">
            <img src={candle.image} alt={candle.candleName} />
            <div className="info">
              <div className="titre">
                <h3>{candle.candleName}</h3>
              </div>
              <div className="prix">
                <p>{candle.price}$</p>
              </div>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
