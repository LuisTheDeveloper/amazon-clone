import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth'
import { auth } from '../firebase'
import './css/Login.css'

export const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = e => {
		e.preventDefault()

		signInWithEmailAndPassword(auth,email,password)
			.then((user) => {
				navigate('/')
			})
			.catch(error => alert(error.message))
	}

	const register = e => {
		e.preventDefault()

		createUserWithEmailAndPassword(auth,email,password)
			.then((user) => {
				console.log(user)
				if(user) {
					navigate('/')
				}
			})
			.catch(error => alert(error.message))
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