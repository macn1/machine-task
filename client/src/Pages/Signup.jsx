import React from 'react';
import  { useState } from 'react'

import { SignupUser } from '../Services/Authservices'


import { useNavigate } from 'react-router-dom'
function Signup() {


  const Navigate = useNavigate()
  const [data, setData] = useState({name:'',email:'',password:''})

  const [err,setError] = useState('')

  const hadleChange =(e) =>{

    const name = e.target.name
    const value = e.target.value

    setData({...data,[name]:value})
  }

  const handleSubmit = (e) =>{

    e.preventDefault()

 
    

    SignupUser(data)
    .then((res)=>{

      if(res){

        Navigate('/login')
      }
      console.log(res);
      
    }).catch((err)=>{
      setError(err.response.data.message)
    
      console.log(err.response.data.message);
      
    })
    
    
  }
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#b6afc2' }}>
      <div className="row w-100">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="card p-4 shadow" style={{ backgroundColor: '#c2b1b1' }}>
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}> 
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name='name'
                  placeholder="Enter your name"
                  onChange={hadleChange}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name='email'
                  placeholder="Enter your email"
                  onChange={hadleChange}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name='password'
                  placeholder="Enter your password"
                  onChange={hadleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>

              <p className="text-center mt-3">
                Already have an account? <a href="/login">Login here</a>
              </p>
              <h5 className='text-center' style={{backgroundColor:'red'}}>{err}</h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
