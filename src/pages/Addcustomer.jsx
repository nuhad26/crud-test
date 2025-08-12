import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Addcustomer = () => {
    const [customers,setCustomers] = useState({
          customername:"",
          carname:"",
    });

    const navigate = useNavigate()
  const handlechange = (e) =>{
    setCustomers((prev) => ({...prev, [e.target.name]:e.target.value}));
  };

    const handleclick = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:8800/customers", {
      customername: customers.customername,
      carname: customers.carname,
    });
      window.alert("Customer added successfully!");
    navigate("/customers");
  } catch (err) {
    console.log(err);
     window.alert("Please Enter the Available Cars!");

  }
};

  console.log(customers)
  return (
    <div className='form'>
      <div className='home-btn'>
    <Link to="/">Home</Link>
  </div>
        <h1>Add Customer</h1>
        <input type='text' placeholder='Enter Customer Name' onChange={handlechange} name='customername' />
        <input type='text' placeholder='Enter Car'onChange={handlechange}  name='carname' />
      <button className="formButton" onClick={handleclick}>Add</button>
    </div>
  )
}

export default Addcustomer
