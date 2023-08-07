import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/modalPayment/Modal";
import "./Panier.css";
import { Link } from "react-router-dom";

const Panier = () => {
  return (
    <>
      <Navbar />
      <Modal />
      <Footer />
    </>

    /*< div className="back" >
      <Navbar />
      <div>
        <h2  >Your card items</h2>
         <Link className="a" to="/">Back to shopping</Link>
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
        <hr className="hr" />
        <div>
        
        </div>
        <hr className="hr" />
        <div className="rights">
          <div className="pay" >
            <div className="align">
              <h4>Sub-total</h4>
              <h4>$9.99</h4>
            </div>
            <p className="p">tax and shipping cost will calculated later</p>
          </div>
          <button className="button" >Check-out</button>
        </div>
      </div>
      <Footer />
          </div>*/
  );
};

export default Panier;
