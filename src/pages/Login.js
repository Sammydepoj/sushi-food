import React from 'react'
import Loginimg from '../Components/Assets/Loginimg.png'
import Loginstyle from '../Styles/Loginstyle.css'
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom';

import Dashboard from './Dashboard';
import LandingPage from './LandingPage';

<Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes> 
    </Router>

const logstyle ={
  height:"100vh",
  opacity:"0.5"
};

const Login = () => {
  return (
    <div className='login-body'>
      <div className='login-body-img'>
        <img src={Loginimg} style={logstyle} alt='' />
      </div>
      <div className='login-body-text'>
        <form>
          <div>
              <h3>Welcome Back!</h3>
              <input type={'email'} placeholder={'Your Email Address'} />
              <br></br>
              <input type={'password'} placeholder={'Your Password'} />
              <br></br>
              <button><Link to ='/Dashboard'>LOGIN</Link></button>
              <p>
                <span>Create account</span>
                <span>Forgot Password</span>
              </p>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login