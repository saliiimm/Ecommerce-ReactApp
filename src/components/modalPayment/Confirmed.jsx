import React, { useState, useEffect } from "react";
import axios from "axios";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";

const Confirmed = (props) => {
  const [candles, setCandles] = useState(props.candels);

 
  
  useEffect(() => {
    candles.map((candel) => {
      fetch(`http://localhost:3000/achats/${candel.id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            console.log(`Article avec ID ${candel.id} supprimé avec succès.`);
          } else {
            console.error(
              `Erreur lors de la suppression de l'article avec ID ${candel.id}.`
            );
          }
        })
        .catch((error) => {
          console.error(
            `Erreur lors de la suppression de l'article avec ID ${candel.id}:`,
            error
          );
        });
    });
  }, []); // 

  return (
    <div className="DetailsFormContainer">
      <div className="confirmedpanier">
        <GiConfirmed size={150} color="#56b280" />
        <h2>Payment Confirmed</h2>
        <h5>ORDER #2039</h5>
        <p>
          Thank you Grey for buying Candleaf.The nature is grateful to you.Now
          that your order is confirmed it will be ready to ship in 2 days.Please
          check your inbox in the future for your order updates
        </p>
        <div>
          <Link to="/">
            <button
              className="button-next"
              onClick={() => {
                props.onClose();
                handleDelete()
              }}>
              Back to shipping
            </button>
          </Link>

          <button className="button-previous">Print receipt</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
