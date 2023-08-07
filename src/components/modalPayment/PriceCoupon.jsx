import "./PriceCoupon.css";

const PriceCoupon = (props) => {
  let subtotal = 0;
  const candels=props.candels;
  
  return <div className="pricecoupon">
  <div className="box-container">
  {candels.map((candel) => {
    const total = (candel.price * candel.quantity).toFixed(2);

    subtotal += parseFloat(total);  
    return(
  <div className="box" key={candel.id}> 
  <div className="qntt">{ candel.quantity}</div>
    <img src={candel.image} alt="" />
    <div className="infobox">
      <div className="titre">{candel.name}</div>
      <div className="prix2">${candel.price}</div>
    </div>
  </div>
)})}

  </div>
  <hr />
  <div className="coupons">
    <input type="text" name="" id="" />
    <button>Add code</button>
  </div>
  <hr />
  <div className="calcultotal">
    <div className="subtotal"><span >Subtotal</span> <span >${subtotal}</span></div>
    <div className="shiping"><span>Shipping</span> <span>Free Shipping</span></div>
  </div>
  <hr />
<div className="total"><span>Total</span><span className="prixtotal">${subtotal}</span></div>

  </div>;
};

export default PriceCoupon;
