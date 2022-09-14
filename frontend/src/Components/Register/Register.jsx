import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {registerUser} from '../../Feature/AuthSlice.js'
import './Register.css'

const Register = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth)
  console.log(auth);
  
  const [user, setUser] = useState({
    name :'', email:'', password:''
  })
  console.log(user);

  const handleRegister = (e)=>{
    e.preventDefault();
    dispatch(registerUser(user))
  }

  return (
    <div className='register'>
      <h2>Register Form </h2>
      <hr />
      <div>
        <div className="input">
          <label htmlFor="">Name</label>
          <input type="text" onChange={(e)=>setUser({...user, name: e.target.value})}/>
        </div>
        <div className="input">
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e)=>setUser({...user, email: e.target.value})}/>
        </div>
        <div className="input">
          <label htmlFor="">Password</label>
          <input type="password" onChange={(e)=>setUser({...user, password: e.target.value})}/>
        </div>
      </div>
      <button className='btn' onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
