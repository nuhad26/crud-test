import { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Updatecustomer = () => {
    const [customers,setCustomers] = useState({
        customername:"",
        carname:"",
    });

    const navigate = useNavigate()
    // const location = useLocation()
    const { id:cusId} = useParams();

      useEffect(() => {
    const fetchCus = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/customers/${cusId}`);
        setCustomers(res.data);
      } catch (err) {
        console.log(err);

      }
    };
    fetchCus();
  }, [cusId]);

  const handlechange = (e) =>{
    setCustomers((prev) => ({...prev, [e.target.name]:e.target.value}));
  };

  const handleclick = async (e) =>{
    e.preventDefault()
    try{
        await axios.put(`http://localhost:8800/customers/${cusId}`,customers)
            navigate("/customers")
    }catch(err){
        console.log(err)
    window.alert("Please Enter the Available Cars!!");

  }
  }
  console.log(customers)
  return (
    <div className='form'>
      <div className='home-btn'>
    <Link to="/">Home</Link>
  </div>
        <h1>Update Customer Details</h1>
        <input type='text' 
        placeholder='Enter Customer name' 
        onChange={handlechange}
         name='customername'
         value={customers.customername} />

        <input type='text'
         placeholder='Enter Car'
         onChange={handlechange}  
         name='carname'
          value={customers.carname}  />

 

      <button className="formButton"onClick={handleclick}>Update</button>
    </div>
  )
}

export default Updatecustomer
