import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import './right.css'

const Right = () => {
  return (
    <div className='column-right'>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes> 
    </div>
  )
}

export default Right