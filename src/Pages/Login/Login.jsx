import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
        {signState === "Sign Up"? <input type="text" placeholder='your name' /> :<></>}
          <input type="email" placeholder='your Email' />
          <input type="password" placeholder='Enter password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
        {signState === "Sign In" ?
        <p>New to Netflix? <span onClick={()=>setSignState("Sign Up")}>Sign Up now</span></p> :
        <p>Already have an account? <span onClick={()=>setSignState("Sign In")}>Sign In now</span></p>}         
        </div>
      </div>
    </div>
  )
}

export default Login
