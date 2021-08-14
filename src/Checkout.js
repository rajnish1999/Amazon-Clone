import React from 'react'

import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
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
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
