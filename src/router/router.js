import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from '../components/Checkout';
import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../components/Login';
import Payment from '../components/Payment';
import { auth, onAuthStateChanged } from '../firebase';
import { useStateValue } from '../StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51Kg2ZABgsUXjPdiDylW4nNLgfdogglmM5KA5Xtjt0k4kH0M0YrFRQCrXS5XfMPZYABOlKKdLZQsyRfHHqaceMw8M005p9gXZvA')

export const AppRouter = () => {
	const [{}, dispatch] = useStateValue()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch({
					type: 'SET_USER',
					user: user 
				})
			} else {
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})
	
	},[])

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={
					<>
						<Header/>
						<Home/>
					</>
				    }>                     
				</Route>
				<Route path="/login" element={<Login/>}></Route> 				
				<Route path="/checkout" element={
					<>
						<Header/>
						<Checkout/>
					</>
				    }></Route>
				<Route path='/payment' element={
					<>
						<Header/>
						<Elements stripe={promise}>
							<Payment/>
						</Elements>
					</>
				}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter