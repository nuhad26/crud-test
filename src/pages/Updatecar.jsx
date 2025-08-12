import { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Updatecar = () => {
    const [rentcar,setRentcar] = useState({
          carname:"",
          model:"",
          rate_per_day:"",
    });

    const navigate = useNavigate()
    // const location = useLocation()
    const { id:carId} = useParams();

      useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/rentcar/${carId}`);
        setRentcar(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCar();
  }, [carId]);

  const handlechange = (e) =>{
    setRentcar((prev) => ({...prev, [e.target.name]:e.target.value}));
  };

  const handleclick = async (e) =>{
    e.preventDefault()
    try{
        await axios.put(`http://localhost:8800/rentcar/${carId}`,rentcar)
            navigate("/rentcar")
          window.alert("Car updated successfully!");
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
        <h1>Update Car Details</h1>
        <input type='text' 
        placeholder='Enter Car' 
        onChange={handlechange}
         name='carname'
         value={rentcar.carname} />

        <input type='number'
         placeholder='Enter Model'
         onChange={handlechange}  
         name='model'
          value={rentcar.model}  />

        <input type='number' 
        placeholder='Enter Rate'
        onChange={handlechange}  
        name='rate_per_day'
         value={rentcar.rate_per_day} />

      <button className="formButton"onClick={handleclick}>Update</button>
    </div>
  )
}

export default Updatecar
