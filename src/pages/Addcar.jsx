import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Addcar = () => {
    const [rentcar,setRentcar] = useState({
          carname:"",
          model:"",
          rate_per_day:"",
    });

    const navigate = useNavigate()
  const handlechange = (e) =>{
    setRentcar((prev) => ({...prev, [e.target.name]:e.target.value}));
  };

  const handleclick = async e =>{
    e.preventDefault()
    try{
        await axios.post("http://localhost:8800/rentcar",rentcar)
                    window.alert("Car added successfully!");
            navigate("/rentcar")
    }catch(err){
        console.log(err)
        window.alert("Something went wrong!");
  }
  }
  console.log(rentcar)
  return (
    <div className='form'>
      <div className='home-btn'>
    <Link to="/">Home</Link>
  </div>
        <h1>Add Car</h1>
        <input type='text' placeholder='Enter Car' onChange={handlechange} name='carname' />
        <input type='number' placeholder='Enter Model'onChange={handlechange}  name='model' />
        <input type='number' placeholder='Enter Rate'onChange={handlechange}  name='rate_per_day'/>
      <button className="formButton" onClick={handleclick}>Add</button>
    </div>
  )
}

export default Addcar
