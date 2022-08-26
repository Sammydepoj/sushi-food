import React from 'react'
import Footerstyle from '../Styles/Footerstyle.css'
import googlePlay from './Assets/googlePlay.svg'
import appstore from './Assets/appstore.svg'
import path from './Assets/Path.svg'
import path1 from './Assets/Path1.svg'
import path2 from './Assets/Path2.svg'

const Footer = () => {
  return (
    <div className='footer-all'>
        <div className='footer'>
            <div className='company'>
                <h4>Company</h4>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className='support'>
                <h4>Support</h4>
                <ul>
                    <li>Help Center</li>
                    <li>Safety Center</li>
                </ul>
            </div>

            <div className='legal'>
            <h4>Legal</h4>
                <ul>
                    <li>Cookies Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Service</li>
                    <li>Dispute resolution</li>
                </ul>
            </div>

            <div className='install'>
                <h4>Install App</h4>
                
                <img src={googlePlay} alt='' />
                <br></br><br></br>
                <img src={appstore} alt='' />
                
            </div>
        
        </div>
        <div className='foot'>
            <p>© 2021 LILIES, All rights reserved</p>
            <div className='socials'>
                <img src={path} alt=''  width={30}  />
                <img src={path1} alt='' width={30} />
                <img src={path2} alt='' width={30} />
            </div>
        </div>
    </div>
  )
}

export default Footer