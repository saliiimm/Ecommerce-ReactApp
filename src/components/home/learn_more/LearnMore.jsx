import React from "react";
import "./LearnMore.css";
import images from "../../../assets/learn_more_img.svg"
import { Link } from "react-router-dom";
import {AiOutlineCheckCircle} from 'react-icons/ai'
const LearnMore = () => {
  return (
    <section className="accueil-introduction">
    <div className="leftcandle">
        <h1 className="h1">Clean and <br /> fragrant soy wax</h1>
        <h2 className="h2">Made for your home and your wellness</h2>
        <div className="container-text">
          <div className="aligns">
          <span  className="spans"> <AiOutlineCheckCircle/>  Eco-sustainable: </span> <p> All recyclable materials, 0% C02 spanissions.</p>
          </div>
          <div className="aligns">
           <span className="spans"><AiOutlineCheckCircle/>Hyphoallergenic: </span> <p>100% natural, human friendly ingredients.</p>
          </div>
          <div className="aligns">

           <span className="spans"> <AiOutlineCheckCircle/>Handmade: </span> <p>All candles are craftly made with love.</p>
          </div>
          <div className="aligns">
           <span className="spans"> <AiOutlineCheckCircle/>Long burning: </span> <p>No more waste. Created for last long.</p>
          </div>

        </div>
        <Link to="/" >
          <button className="button">Learn more</button>
        </Link>
       
    </div>

        <img src={images} alt="Learn More" className="imagecandle"/>
</section>
  )
}

export default LearnMore
