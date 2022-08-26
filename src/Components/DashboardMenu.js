import React from 'react'
import Dashboardmenustyle from '../Styles/Dashbordmenustyle.css'


const DashboardMenu = ({menuName,menuDescription,menuPic,menuPrice,add}) => {
  return (
    <div className='menu-item'>
            <img src={menuPic} alt=''/>
            <h3>{menuName}</h3>
            <p>{menuDescription}</p>

            <div className='price-add'>
                <span className='price'>{menuPrice}</span>
                <span className='add'>{add}</span>
            </div>
    </div>
  )
}

export default DashboardMenu