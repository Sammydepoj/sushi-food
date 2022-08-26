import React from 'react'
import Header from '../Components/Header'
import Herosection from '../Components/Herosection'
import Menu from '../Components/Menu'
import Special from '../Components/Special'
import food1 from '../Components/Assets/food1.svg'
import food3 from '../Components/Assets/food3.svg'
import food4 from '../Components/Assets/food4.svg'
import Notify from '../Components/Notify'
import Footer from '../Components/Footer'

const LandingPage = () => {
  return (
    
        <div>
            <Header />
            <Herosection />
            <Special />
              <div className='menusection'>
                    <Menu food={food3} menuName={'Stir fry Pasta'} menuDescription={'Stir fry pasta yada yada yada because of Sesan.'} />
                    <Menu food={food4} menuName={'Meat Balls'} menuDescription={'Stir fry pasta yada yada yada because of Sesan.'} />
                    <Menu food={food1} menuName={'Burger Meal'} menuDescription={'Stir fry pasta yada yada yada because of Sesan.'} />
              </div>
            <Notify />
            <Footer />
        </div>
        )
  }
  export default LandingPage