import React, { useState, useContext } from 'react'

import { loginUser } from '../Services/Authservices'

import { useNavigate } from 'react-router-dom'


import { AuthContext } from '../AuthContext/AuthContext';



function Login() {

  const { login } = useContext(AuthContext);

  const Navigate = useNavigate()
  const [data, setData] = useState({ email: '', password: '' })

  const [err, setError] = useState('')

  const hadleChange = (e) => {

    const name = e.target.name
    const value = e.target.value

    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginUser(data)
      login(res.data);
      if (res) {
        Navigate('/')
      }

    } catch (error) {
      console.log(error);

      setError(error.response.data.message)

      console.log(err.response.data.message);

    }




  }

  return (

    <div className=" d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#b6afc2' }}>
      <div className="row w-100">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="card p-4 shadow" style={{ backgroundColor: '#c2b1b1' }}>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">

                <input
                  type="email"
                  className="form-control"
                  id="name"
                  name='email'
                  placeholder="Enter your email"
                  onChange={hadleChange}
                />
              </div>

              <div className="form-group mb-3">

                <input
                  type="password"
                  className="form-control"
                  id="email"
                  placeholder="Enter your password"
                  name='password'
                  onChange={hadleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <p className="text-center  mt-3">
                Don't have an account? <a href="/signup">Register here</a>
              </p>
              <h5 className='text-center' style={{ backgroundColor: 'red' }}>{err}</h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );



}

export default Login
