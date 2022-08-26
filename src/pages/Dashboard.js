import React from "react";
import lilly from "../Components/Assets/lilly.svg";
import Dashboardstyle from "../Styles/Dashboardstyle.css";
import homeimg from "../Components/Assets/home.png"
import profimg from "../Components/Assets/profile.png"
import orderimg from "../Components/Assets/orders.png"
import cartimg from "../Components/Assets/cart.png"
import userimg from "../Components/Assets/user.png"
import DashboardMenu from "../Components/DashboardMenu";
import pic1 from "../Components/Assets/pic1.png"
import pic2 from "../Components/Assets/pic2.png"
import pic3 from "../Components/Assets/pic3.png"
import pic4 from "../Components/Assets/pic4.png"
import pic5 from "../Components/Assets/pic5.png"
import pic6 from "../Components/Assets/pic6.png"




const Dashboard = () => {
  return (
    <div className="dashboard-body">

      <div className="menuBar">
          <span>
            <img src={lilly} alt="logo" />
            <span className="heading">Lillies</span>         
          </span>

          <div className="dash-navs">
            <span><img src={homeimg} alt='' /></span>
            <span>Dashboard</span>
          </div>

          <div className="dash-navs">
            <span><img src={profimg} alt='' /></span>
            <span>Your Profile</span>
          </div>

          <div className="dash-navs">
            <span><img src={orderimg} alt='' /></span>
            <span>Orders</span>
          </div>
          
          <div className="dash-navs">
            <span><img src={cartimg} alt='' /></span>
            <span>Your Cart</span>
          </div>
      </div>

      <div className="dashBody">
        <div className='name-pic'>
            <div className='name'>
              <h3>Good morning, Oghenevwede!</h3>
              <p>What delicious meal are you craving today?</p>
            </div>
            <div className='pic'>
              <img src={userimg} alt='' />
            </div>
        </div>

        <div className='menus'>
          <DashboardMenu menuName={'Stir Fry Pasta'}menuDescription={'The in-house pasta and chicken by chef Moose'}menuPic={pic1} menuPrice={'N 1000'}add={'Add to Cart'} />

          <DashboardMenu menuName={'Stir Fry Pasta'}menuDescription={'The in-house pasta and chicken by chef Moose'}menuPic={pic2} menuPrice={'N 1000'}add={'Add to Cart'} />

          <DashboardMenu menuName={'Stir Fry Pasta'}menuDescription={'The in-house pasta and chicken by chef Moose'}menuPic={pic3} menuPrice={'N 1000'}add={'Add to Cart'} />

          <DashboardMenu menuName={'Stir Fry Pasta'}menuDescription={'The in-house pasta and chicken by chef Moose'}menuPic={pic4} menuPrice={'N 1000'}add={'Add to Cart'} />

          <DashboardMenu menuName={'Stir Fry Pasta'}menuDescription={'The in-house pasta and chicken by chef Moose'}menuPic={pic5} menuPrice={'N 1000'}add={'Add to Cart'} />

          <DashboardMenu menuName={'Stir Fry Pasta'}menuDescription={'The in-house pasta and chicken by chef Moose'}menuPic={pic6} menuPrice={'N 1000'}add={'Add to Cart'} />
        </div>

      </div>


    </div>
  );
};

export default Dashboard;
