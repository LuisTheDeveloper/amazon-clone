import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from '../components/Checkout';
import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../components/Login';
import { auth, onAuthStateChanged } from '../firebase';
import { useStateValue } from '../StateProvider';

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
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter