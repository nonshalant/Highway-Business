import React from 'react'
import './left.css'
import { Link } from 'react-router-dom'

const Left = () => {
  return (
    <div className='column-left'>
        <h1>Highway Business</h1>
        <ul className='nav-links'>
          <Link to='/orders'>New Orders</Link>
          <Link to='/in-progress'>In Progress</Link>
          <Link to='/ready-for-pickup'>Ready For Pickup</Link>
          <Link to='/order-history'>Order History</Link>
        </ul>
        <div className='column-left-bottom'>
          <img src='' alt='Hello World'></img>
        </div>
      </div>
  )
}

export default Left