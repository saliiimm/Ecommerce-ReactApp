import React from 'react'
import icon from '../../../assets/icon.png'
import background from "../../../assets/Acceuil_bg.svg"
import './Acceuil.css'
import { Link } from 'react-router-dom'
const Acceuil = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "75vh", 
    width: "100%", 
  };
  return (
    <section style={backgroundImageStyle} className="home-introduction">
    <div className='desc'>
      <img src={icon} alt=""  className='center'/>
        <h1>The nature candle</h1>
        <p className='para'>
            All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
        </p>
        <Link to="/" className='buttondesc'>
          <button>  Discover our collection</button>
     
        </Link>
      
    </div>
     </section>
  )
}

export default Acceuil
