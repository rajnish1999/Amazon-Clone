import React from 'react'

import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                     src="https://i.picsum.photos/id/1044/4032/2268.jpg?hmac=BXmoMkaurlzpTLYQupXLipcmI1sFbgT5sIz98Ob5VZE"
                     alt="ad"
                />

                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    
                    {basket.map(({ id, title, rating, price, image}, index) => (
                        <CheckoutProduct 
                        key={index}
                        id={id}
                        title={title}
                        image={image}
                        price={price}
                        rating={rating} />
                    ))}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
