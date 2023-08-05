import React from "react";
import "./DetailsContent.css";
import { BsCart3 } from "react-icons/bs";
import { AiOutlinePlus,AiOutlineLine } from "react-icons/ai";
const DetailsContent = () => {
  return (
    <div className="details">
      <div className="left-home">
      <div className="image">
      <img
          src="https://s3-alpha-sig.figma.com/img/5ac9/3086/b584cab7879f945efaa1208441b07917?Expires=1691971200&Signature=WZDvy3TEB9Ge6ygTMAGAC0cL1mZ6hAeA9bAx0~Ac8zEtyY2YciAc1-9ZZZ~8LbrRDTJvjR-9XtWy1ibZKQe5LStmHgJutba7USIZupUIaqgPYh1oZcIZbT8V8qN~kD-g3avAUuT54IRAGyQ3b0DH2BsV1du4FadvOqgEQE0quBD-oNaZoq1dHHqwlOnROoGgRY1Pw9a~eWA4r0OB62rrtA0MvJcyw2YrjphVHSnuQOi~Wy4UheXsNb1ZsvnWsHgqsthTJ~wtymvlpnl9Wlq~6mnNPNz2HmLTaEtBB5sM4Z8yNo7CD1svwFcAbpMmdKia01azpEheNqE5T-mRh-B-jA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
        <div className="text-box">
          <p>All hand-made with natural soy wax, Candleaf is <br /> made for your pleasure moments. </p>
        <span className="delivry"> 🚚 FREE SHIPPING </span>
        </div>
       
      </div>
      <div className="right-home">
        <div className="title">Spiced Mint Candleaf®</div>
        <div className="Info">
          <div className="purchase">
            <div className="price">$ 9.99</div>
            <div className="one">
            <div className="input">
               <input type="radio" name="" id="" />
                <span>one time purchase </span>
               </div>
            </div>
          </div>

          <div className="Quantity">
            <div className="qnt">
              
              <p>Quantity</p> <div className="nbr"><AiOutlinePlus/>  1  <AiOutlineLine/></div>
            </div>
            <div className="two">
              <div className="select">
               <div className="input">
               <input type="radio" name="" id="" />
                <span>Subscribe and delivery every  </span>
               </div>
                <select name="" id="">
                  <option value=""> 4 weeks</option>
                </select>
              </div>
              <p>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details</p>
            </div>
          
          </div>
           <button className="btn">   <BsCart3/> + Add to cart</button>
          <div className="productDetails">
        <div className="ligne1"> <span className="span">Wax</span>: Top grade Soy wax that delivers a smoke less,  consistent burn</div>
         <div className="ligne2"> <span className="span">Fragrance</span>
: Premium quality ingredients with natural essential oils </div>
<div className="ligne3"><span><span className="span">
  Burning Time</span>: 70-75 hours</span>
<span><span className="span">Dimension</span>: 10cm x 5cm </span>
<span> <span className="span">Weight</span>: 400g</span> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
