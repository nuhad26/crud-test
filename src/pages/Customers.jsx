import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Customers = () => {
    const [customers,setCustomers] = useState([])

    useEffect(()=>{
        const fetchAllCustomers = async () =>{

try{
            const res = await axios.get("http://localhost:8800/customers");
            setCustomers(res.data);
            console.log(res)
        }catch(err){
            console.log(err)
        }
    };
    fetchAllCustomers();
},[]);

const handleDelete = async (id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
  if (!confirmDelete) return;
    try{
        await axios.delete("http://localhost:8800/customers/"+id)
        window.location.reload()
    }catch(err){
        console.log(err)
    }
}
  return (
    <div className='title'>
      <div className='home-btn'>
    <Link to="/">Home</Link>
  </div>
      <h1>Customers</h1>
      <div className='table'>
        <div className="customers">
          {customers.map(customers=>(
              <div className='car' key={customers.id}>
                <h2> {customers.customername}</h2>
                <h3>{customers.carname}</h3>
                <button className='delete' onClick={()=>handleDelete(customers.id)}>Delete</button>
                <button className='update'><Link to={`/Updatecustomer/${customers.id}`}>Update</Link></button>
              </div>
          ))}
        </div>
        <button className='formButton'><Link to ='/Addcustomer'>Add New Customer</Link></button>
      </div>
    </div>
  )
}



export default Customers
