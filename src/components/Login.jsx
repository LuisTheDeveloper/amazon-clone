import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Login.css'

export const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = e => {
		e.preventDefault()

	}

	const register = e => {
		e.preventDefault()
	}
    
	return (
		<div className='login'>
			<Link to='/'>
				<img
					alt=''
					className='login_logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
				/>
			</Link>

			<div className='login_container'>
				<h1>Sign In</h1>

				<form>
					<h5>Email or mobile phone number</h5>
					<input type='email' value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input type='password' value={password}
						onChange={e => setPassword(e.target.value)}
					/>        

					<button type='submit' className='login_signIn'
						onClick={signIn}
					>Sign In</button> 
				</form>
				<p>
                        By signing-in you agree to Amazon Clone Conditions of Use
                        & Sale. Please see our Privacy Notice, our Cookies 
                        Notice and our Interest-Based Ads Notice.                        
				</p>           

				<button className='login_register'
					onClick={register}
				>Create your Amazon account</button>

			</div>
		</div>
	)
}

export default Login