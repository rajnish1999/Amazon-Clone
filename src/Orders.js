import React,{ useState, useEffect } from 'react'

import './Order.css';
import { useStateValue } from './StateProvider';
import { db } from './firebase'

function Order() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .onSnapshot((snapshot) => (
            setOrders(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    }else{
        setOrders([])
    }
}, [user])
console.log(orders.length)
    return (
        <div className="orders">
            <h1>your orders</h1>

            <div className='orders__order'>
                
                {orders?.map((order) => (
                    // <Order order={order} />
                    <p>hello</p>
                ))}
            </div>
        </div>
    )
}


export default Order
