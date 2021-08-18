import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

const promise = loadStripe('pk_test_Ti5CqizggAnpe7idYVxEFsMw000HhQJelw');

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("user is ", authUser);
			if(authUser){
			// user is logged in
				dispatch({
					type: 'SET_USER',
					user: authUser
				})

			}else{
			//user logged out
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})
	},[])

  return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/Payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
		
			</div>
		</Router>
  );
}

export default App;
