import React from 'react'
import './css/CheckoutProduct.css'

export const CheckoutProduct = ({id, image, title, price, rating}) => {
	return (
		<div className='checkoutProduct'>
			<img alt='' className='checkoutProduct_image' src={image}/>

			<div className='checkoutProduct_info'>
				<p className='checkoutProduct_title'>{title}</p>
				<p className='checkoutProduct_price'>
					<small>£</small>
					<strong>{price}</strong>
				</p>
				<div className='cehcoutProduct_rating'>
					{Array(rating).fill().map((_,i) => (
						<p key={i}>⭐</p>
					))}
				</div>
				<button>Remove from Basket</button>
			</div>
		</div>
	)
}

export default CheckoutProduct