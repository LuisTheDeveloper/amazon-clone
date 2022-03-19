import React from 'react'
import Subtotal from './Subtotal'
import './css/Checkout.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move'

export const Checkout = () => {
	const [{basket, user}, dispatch] = useStateValue()
	
	const ticketNotVisibleState = {
		transform: "translateX(-100%)",
		opacity: 0
	  };

	return (
		<div className='checkout'>
			<div className='checkout_left'>
				<img alt='' className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/02/AudibleUK/en_GB/cruk/sitestripe/1112-DerrenBrownAMZ-DT-PDP-ILM-Eng_650x45_V01._CB626640236_.jpg'/>
				<div>
					<h3>Hello, {user?.email}</h3>
					<h2 className='checkout_title'>Your Shopping Basket</h2>
					<FlipMove duration={300} easing="cubic-bezier(0.25, 0.1, 0.25, 1)">					
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
					</FlipMove>
				</div>
			</div>

			<div className='checkout_right'>
				<Subtotal/>
			</div>
		</div>
	)
}

export default Checkout