import React from 'react'

import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ key, id, image, title, price, rating, hideButton }) {
    const [{ basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }

    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct__image" 
            src={image} alt="book" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((ele,i) => <p key={i}>🌟</p>)}
                </div>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from basket</button>)}
            </div>
            
        </div>
    )
}

export default CheckoutProduct
