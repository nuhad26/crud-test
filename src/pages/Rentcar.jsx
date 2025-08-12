import React from 'react'
import { useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Rentcar = () => {
    const [rentcar,setRentcar] = useState([])

    useEffect(()=>{
    const fetchAllrentcar = async () =>{
        try{
            const res = await axios.get("http://localhost:8800/rentcar");
            setRentcar(res.data);
            console.log(res)
        }catch(err){
            console.log(err)
        }
    };
    fetchAllrentcar();
},[]);

const handleDelete = async (id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this Car?");
  if (!confirmDelete) return;
    try{
        await axios.delete("http://localhost:8800/rentcar/"+id)
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
      <h1>Rent A Car</h1>
      <div className='table'>
        <div className="rentcar">
          {rentcar.map(rentcar=>(
              <div className='car' key={rentcar.id}>
                <h2> {rentcar.carname}</h2>
                <h3>{rentcar.model}</h3>
                <p>{rentcar.rate_per_day}</p>
                <button className='delete' onClick={()=>handleDelete(rentcar.id)}>Delete</button>
                <button className='update'><Link to={`/Updatecar/${rentcar.id}`}>Update</Link></button>
              </div>
          ))}
        </div>
        <button className='formButton'><Link to ='/Addcar'>Add New Car</Link></button>
      </div>
    </div>
  )
}

export default Rentcar
