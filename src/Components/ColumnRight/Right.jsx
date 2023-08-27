import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import './right.css'
import Orders from './Orders/Orders'
import Modal from './Orders/Modal'

const Right = () => {
  return (
    <div className='column-right'>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/orders' element={<Orders/>}></Route>
            <Route path='/order/:orderNumber' element={<Modal/>}></Route>
        </Routes> 
    </div>
  )
}

export default Right