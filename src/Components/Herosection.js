import React from 'react'
import food2 from './Assets/food2.svg'
import googlePlay from './Assets/googlePlay.svg'
import appstore from './Assets/appstore.svg'
import Herostyle from '../Styles/Herostyle.css'


const Herosection = () => {
  return (
    <div className='hero-body'>
        <div className='hero-text'>
            <h1>Order<span>Food</span>anytime, anywhere</h1>
            <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
            <div className='hero-text-images'>
                <img src={googlePlay} alt='' />
                <img src={appstore} alt='' />
            </div>
        </div>
        <div className='hero-food-img'>
            <img src={food2} alt='food-one' />
        </div>
    </div>
  )
}

export default Herosection