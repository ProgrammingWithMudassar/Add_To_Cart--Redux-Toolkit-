import React from 'react'
import './Login.css'

const Login = () => {
  return (
      <div className='register'>
        <h2>Login Form </h2>
        <hr />
        <div>
          <div className="input">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="input">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
        </div>
        <button className='btn'>Login</button>
      </div>
  )
}

export default Login


