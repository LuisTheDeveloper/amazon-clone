import React, { forwardRef } from 'react'
import { useStateValue } from '../StateProvider'
import './css/CheckoutProduct.css'

export const CheckoutProduct = ({id, image, title, price, rating}, ref) => {
	const [{ basket }, dispatch] = useStateValue()
	console.log("basket: ", basket)
	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		})
	}

	return (
		<div ref={ref} className='checkoutProduct'>
			<img alt='' className='checkoutProduct_image' src={image}/>

			<div className='checkoutProduct_info'>
				<p className='checkoutProduct_title'>{title}</p>
				<p className='checkoutProduct_price'>
					<small>£</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct_rating'>
					{Array(rating).fill().map((_,i) => (
						<p key={i}>⭐</p>
					))}
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	)
}

export default forwardRef(CheckoutProduct)