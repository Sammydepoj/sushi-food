import React from 'react'
import Notifystyle from '../Styles/Notifystyle.css'

const Notify = () => {
  return (
    <div className='Notifybody'>
        <div className='Notifybody-text'>
            <h2>Get notified when we update!</h2>
            <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
        </div>
        <div className='formInput'>
            <form>
                <input type={""} placeholder='Myemail@email.com' />
                <button>Get notified</button>
            </form>
        </div>
    </div>
  )
}
export default Notify