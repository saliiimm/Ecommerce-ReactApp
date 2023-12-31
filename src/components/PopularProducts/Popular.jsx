import { useState, useEffect } from "react";
import axios from "axios";
import "../productsHome/Products.css";
import { Link } from "react-router-dom";
import "./popular.css"

const Popular = () => {
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

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomCandles = shuffleArray(candles).slice(0, 4);

  return (
    <div className="Popular">
      <h2>Popular</h2>
      <p>Our top selling product that you may like </p>
      <div className="productCards">
        {randomCandles.map((candle, index) => (
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
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
