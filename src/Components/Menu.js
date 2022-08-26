import React from 'react'
import Menustyle from '../Styles/menustyle.css'



const Menu = ({menuName,menuDescription,food}) => {
  return (
    <div className=''>
        <div className='menu-item'>
            <img src={food} alt=''/>
            <h3>{menuName}</h3>
            <p>{menuDescription}</p>
        </div>
    </div>
  )
}

export default Menu