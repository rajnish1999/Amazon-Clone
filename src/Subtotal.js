import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

import './Subtotal.css';
import { useStateValue } from './StateProvider'

function Subtotal() {
    const history = useHistory();
    const [state, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({state.basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={state.basket.reduce((acc, curr) => acc + curr.price , 0)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button
            onClick={(e) => history.push('/payment')}
            >
            Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal
