import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Panier.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/modalPayment/Modal";
import { Link } from "react-router-dom";

const Panier = () => {
  const [candles, setCandles] = useState([]);
  let subtotal = 0;

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
  const handleDelete = (itemId) => {
    // Mise à jour de la base de données JSON (vous pouvez également utiliser une API pour cela)
    fetch(`http://localhost:3000/achats/${itemId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        console.log(`Article avec ID ${itemId} supprimé avec succès.`);
      } else {
        console.error(
          `Erreur lors de la suppression de l'article avec ID ${itemId}.`
        );
      }
    });
  };

  const remove = (id) => {
    const deletes = candles.filter((item) => item.id !== id);
    setCandles(deletes);
  };

  return (
    <div className="back">
      <Navbar />
      <Modal />
      <div>
        <h2>Your cart items</h2>
        <Link className="a" to="/">
          Back to shopping
        </Link>
      </div>
      <div>
        <div className="shop">
          <h4>Product</h4>
          <div className="shopp">
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
          </div>
        </div>
        <hr className="hr hrs" />
        <div className="itemContent">
          {candles.map((item) => {
            const total = (item.price * item.quantity).toFixed(2);

            subtotal += parseFloat(total);

            return (
              <div className="shop">
                <div className="flexx">
                  <img src={item.image} className="small" alt={item.name} />
                  <div className="pro">
                    <p className="isem">{item.name}</p>

                    <button
                      className="remove"
                      onClick={() => remove(item.id)}
                    />

                    <button
                      className="remove"
                      onClick={() => handleDelete(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="shopp">
                  <p>${item.price}</p>
                  <p>{item.quantity}</p>
                  <p>${total}</p>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="hr" />
        <div className="rights">
          <div className="pay">
            <div className="align">
              <h4>Sub-total</h4>
              <h4>${subtotal.toFixed(2)}</h4>
            </div>
            <p className="p">Tax and shipping cost will be calculated later</p>
          </div>
          <button className="button">Check-out</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Panier;
