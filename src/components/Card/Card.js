import React from 'react'
import './Card.css'
import img1 from '../Card/image/img1.webp'
import img2 from '../Card/image/img2.webp'
import img3 from '../Card/image/img3.webp'
import img4 from '../Card/image/img4.webp'

const Card = () => {
  return (
    <div className='cards'>
      <h1>Renovate your interior with moduler design</h1>
       <div className='card_1'> <img className='img1' src={img1} alt="" /> 
       <h3>Green Armchair</h3>
       <p>$380</p>
       </div>

       <div className='card_3'> <img className='img3' src={img3} alt="" /> 
       <h3>Valvet Armchair</h3>
       <p>$590.0</p>
       </div>


       <div className='card_2'> 
       <img className='img2' src={img2} alt="" /> 
       </div>


       <div className='card_4'> 
       <img className='img4' src={img4} alt="" /> 
       </div>
       
       
    </div>
  )
}

export default Card