import React from 'react'
import { BrowserRouter, HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import Checkout from '../components/Checkout';

import Header from '../components/Header';
import Home from '../components/Home';

export const AppRouter = () => {
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