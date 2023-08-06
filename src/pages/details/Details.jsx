import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import DetailsContent from "../../components/DetailsContent/DetailsContent";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [candles, setCandles] = useState([]);
  const { id } = useParams(); 
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
      <DetailsContent candle={candles}/>
      <Footer />
    </>
  );
};

export default Details;
