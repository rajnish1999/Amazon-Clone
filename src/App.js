import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

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
						<Payment />
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
