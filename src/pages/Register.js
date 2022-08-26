import React from 'react'
import Loginimg from '../Components/Assets/signupimg.png'
import Loginstyle from '../Styles/Registerstyle.css'


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
              <h3>Welcome to Lilies!</h3>
              <input type={'text'} placeholder={'Your First Name'} />
              <br></br>
              <input type={'email'} placeholder={'Your Email Address'} />
              <br></br>
              <input type={'password'} placeholder={'Your Password'} />
              <br></br>
              <button>SIGN UP</button>
              <p>Already have an account. <span>LOGIN</span></p>
          </div>


        </form>

      </div>
    </div>
  )
}

export default Login