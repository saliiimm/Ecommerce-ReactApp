import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import DetailsContent from "../../components/DetailsContent/DetailsContent";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Panier from "../panier/Panier";
const Details = () => {
  const [candles, setCandles] = useState([]);
  const [cartItems, setCartItems] = useState([]); 
  const { id } = useParams(); 

  const handleAddToCart = (candle) => {
    setCartItems((prevItems) => [...prevItems, candle]);
  };
  useEffect(() => {

    axios
      .get("/db.json")
      .then((response) => {
        const data = response.data;
        // Filtrer les bougies en fonction de l'ID
        const filteredCandles = data.candles.filter(candle => candle.key === id);
        setCandles(filteredCandles);
       
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
 
  
  return (
    <>
      <Navbar />
      <DetailsContent onAddToCart={handleAddToCart} candle={candles} cartItems={cartItems}/>
      <Footer />
    </>
  );
};

export default Details;