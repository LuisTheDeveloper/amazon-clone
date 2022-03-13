import React from 'react'
import { BrowserRouter, HashRouter, Outlet, Route, Routes } from 'react-router-dom';

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
						<h1>I am CHECKOUT!</h1>
					</>
				    }></Route>                   
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter