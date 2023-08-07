import React from 'react'
import './FeedBacks.css'
import image1 from "../../assets/avis2.svg";
import image2 from "../../assets/avis1.svg";
import image3 from "../../assets/avis3.svg";
import {AiFillStar} from 'react-icons/ai'
const FeedBacks = () => {
  return (
    <div className='green'>
      <div>
        <h2 className='titlef' >Testimonials</h2 >
        <p className='titlep'> Some quates from our happy customers</p>
      </div>
    <div className='greens'>
      <div className='card-feed'>
        <div>
          <img src={image1} alt="" />
          <div>
          <AiFillStar className='stars' />
          <AiFillStar className='stars' />
          <AiFillStar className='stars'/>
          <AiFillStar className='stars' />
          <AiFillStar className='star' />
          </div>
          <div>
            <p className='feedb'>“I love it! No more air <br /> fresheners”</p>
            <p  className='feedname'>Luisa</p>
          </div>
        </div>
      </div>
      <div className='card-feed'>
        <div>
          <img src={image2} alt="" />
          <div>
          <AiFillStar  className='stars'/>
          <AiFillStar className='stars' />
          <AiFillStar className='stars'/>
          <AiFillStar className='stars'/>
          <AiFillStar className='stars'/>
          </div>
          <div>
            <p className='feedb'>“Raccomended for  <br /> everyone”</p>
            <p className='feedname'>Edoardo</p>
          </div>
        </div>
      </div>
      <div className='card-feed'>
        <div>
          <img src={image3} alt="" />
          <div>
          <AiFillStar className='stars' />
          <AiFillStar className='stars'/>
          <AiFillStar className='stars'/>
          <AiFillStar className='stars'/>
          <AiFillStar className='star'/>
          </div>
          <div>
            <p className='feedb'>“Looks very natural, the smell is awesome”</p>
            <p  className='feedname'>Mart</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FeedBacks