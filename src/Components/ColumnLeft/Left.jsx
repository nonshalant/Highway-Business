import React from 'react'
import './left.css'
import { Link } from 'react-router-dom'

const Left = () => {
  return (
    <div className='column-left'>
        <h1>Highway Business</h1>
        <ul className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/feedback'>Orders</Link>
          <Link to='/payments'>Menu</Link>
          <Link to='/menu'>Inventory</Link>
          <Link to='/users'>Customers</Link>
          <Link to='/documents'>Analytics</Link>
          <Link to='/settings'>Settings</Link>
          <Link to='/help'>Help</Link>
        </ul>
        <div className='column-left-bottom'>
          <img src='' alt='Hello World'></img>
        </div>
      </div>
  )
}

export default Left