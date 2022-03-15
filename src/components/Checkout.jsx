import React from 'react'
import Subtotal from './Subtotal'
import './css/Checkout.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'

export const Checkout = () => {
	const [{basket}, dispatch] = useStateValue()

	return (
		<div className='checkout'>
			<div className='checkout_left'>
				<img alt='' className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/02/AudibleUK/en_GB/cruk/sitestripe/1112-DerrenBrownAMZ-DT-PDP-ILM-Eng_650x45_V01._CB626640236_.jpg'/>
				<div>
					<h2 className='checkout_title'>Your Shopping Basket</h2>
					{basket.map((item,key) => (
						<CheckoutProduct
							key={`${item.id} ${key}`}
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>

			<div className='checkout_right'>
				<Subtotal/>
			</div>
		</div>
	)
}

export default Checkout