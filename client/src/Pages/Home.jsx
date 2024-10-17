import React from 'react'
import Navbar from '../Components/Navbar'


import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext'; 

import axios from 'axios';

function Home() {


  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:4000/user/verify', { headers: { Authorization: `Bearer ${token}` } });
      console.log(res.data.user);
      
      setData(res.data.user);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar ></Navbar>
      <div>


        <h2 className='text-center mt-5'>  Welcome {data?.name || user?.username}</h2>

      
        </div>

    </div>
  )
}

export default Home
