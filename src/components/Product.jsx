import React from 'react'
import { useStateValue } from '../StateProvider'
import './css/Product.css'

export const Product = ({id,title, image, price, rating}) => {
	const [{basket}, dispatch] = useStateValue()

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			}
		})
	}

	return (
		<div className='product'>
			<div className='produc_info'>
				<p className='product_title'>{title}</p>
				<p className='product_price'>
					<small>£</small>
					<strong>{price}</strong>
				</p>
            
				<div className='product_rating'>
					{Array(rating).fill().map((_, i) =>(
						<p key={i}>⭐</p>
					))}
				</div>
			</div>

			<img alt='imageprod' src={image}/>

			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	)
}

export default Product