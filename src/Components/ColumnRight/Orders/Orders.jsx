import React, { useEffect } from 'react'
import './order.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Orders = () => {
    const fakeOrders = [
        {
            id: '1',
            name: "Shamir Gibbons",
            customerId: '098754321',
            order: '1/Oz Of that ZAZA',
            price: 25
        },
        {
            id: '2',
            name: "Shamir Gibbons",
            customerId: '098754321',
            order: '1/Oz Of that ZAZA',
            price: 25
        },
        {
            id: '3',
            name: "Shamir Gibbons",
            customerId: '098754321',
            order: '1/Oz Of that ZAZA',
            price: 25
        },
        {
            id: '4',
            name: "Shamir Gibbons",
            customerId: '098754321',
            order: '1/Oz Of that ZAZA',
            price: 25
        },
        {
            id: '5',
            name: "Shamir Gibbons",
            customerId: '098754321',
            order: '1/Oz Of that ZAZA',
            price: 25
        },
        {
            id: '6',
            name: "Shamir Gibbons",
            customerId: '098754321',
            order: '1/Oz Of that ZAZA',
            price: 25
        },
        {
               id: '7',
            name: "Shamir Gibbons",
            customerId: '098754321',
            order: '1/Oz Of that ZAZA',
            price: 25
        },
        {
            id: '8',
            name: "Shamir Gibbons",
            customerId: '098754321',
            order: '1/Oz Of that ZAZA',
            price: 25
        },
    ];

    const fetchOrders = async() =>{    
        try {
            const response = await axios.get('http://localhost:5000/delivery-orders')  
        } catch (error) {
            console.error(error)  
        } 
    }

    useEffect(()=>{
        fetchOrders()
    },[])

  return (
    <div className='orders'>
        <div className="orders-container">
            <h1>Orders</h1>
            <div className="order-container-inner">
                <div className="orders-header">
                    <p>Name</p>
                    <p>Showing {fakeOrders.length} results</p>
                </div>
                <div className="order-details">
                    {
                        fakeOrders.map(order => 
                            <Link to={`/order/${order.id}`} key={order.customerId} className="order-details-container">
                                <p>{order.name}</p>
                            </Link>    
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orders