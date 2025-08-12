import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import nexon from'../src/nexon.jpeg'
import cars from'./../src/rentcars.jpeg'
import verna from '../src/verna.jpeg'
import swift from '../src/swift2025.jpeg'
import eon from '../src/eon.jpeg'
import creta from '../src/creta.jpeg'
import venue from '../src/venue.jpeg'
import thar from '../src/thar.jpeg'
import icon from '././../src/eon.jpeg'

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
            <img1 src={icon} alt="icon" />
          <h2>RentCar</h2>
        </div>
        <ul className="nav-links">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/rentcar">Cars</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <div className='home'>
        <div className='homepage'>
          <h1>Welcome to RentCar</h1>
          <p><i>Find your perfect ride, anytime, anywhere.</i></p>
          
          <button className='addcar'>
            <Link to='/rentcar'>View Cars</Link>
          </button>
          <button className='addcar'>
            <Link to='/customers'>View Customers</Link>
          </button>
          <div className="car-gallery">
  <img src={nexon} alt="Tata Nexon" />
  <img src={cars} alt="rent cars" />
  <img src={verna} alt="Hyundai verna" />
  <img src={swift} alt="Suzuki Swift" />
</div>
          <div className="car-gallery">
  <img src={thar} alt="Mahindra Thar" />
  <img src={eon} alt="Hyundai Eon" />
  <img src={creta} alt="Hyundai Creta" />
  <img src={venue} alt="Hyundai Venue" />
</div>
        </div>
      </div>
    </>
  )
}

export default Home
