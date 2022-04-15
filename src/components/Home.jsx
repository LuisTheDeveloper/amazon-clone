import React from 'react'
import './css/Home.css'
import Product from './Product'

export const Home = () => {
	return (
		<div className='home'>
			<div className='home_container'>
				<img alt='home' className='home_image' src='https://m.media-amazon.com/images/I/61EoWlx-g3L._SX3000_.jpg'/>
            
				<div className='home_row'>
					<Product 
						id="123456"
						image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
						price={19.99}
						rating={5}
						title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
					/>
					<Product
						id="234567"
						image='https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SX450_.jpg'
						price={239.99}
						rating={4}
						title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl'                
					/>
				</div>

				<div className='home_row'>
					<Product 
						id="987654"
						image='https://m.media-amazon.com/images/I/51KIfWbhXwL._AC_SX355_.jpg'
						price={109}
						rating={5}
						title='LG Full HD Gaming Monitor 22MK400H - 22 inch, 60 Hz, 1 ms, 1920X1080 px, 250 cd/m2, Radeon FreeSync, Wall Mountable'
					/>
					<Product
						id="852741"
						image='https://m.media-amazon.com/images/I/71UGFF-EzFL._AC_SY355_.jpg'
						price={89.99}
						rating={5}
						title='Echo (4th generation) | With premium sound, smart home hub and Alexa | Charcoal'                
					/>
					<Product
						id="963258"
						image='https://m.media-amazon.com/images/I/71Ji7XbvE6L._AC_SY355_.jpg'
						price={239}
						rating={4}
						title='Motorola E30 2/32GB - Mineral Grey'                
					/>					
				</div>

				<div className='home_row'>
					<Product
						id="753357"
						image='https://m.media-amazon.com/images/I/61RWFN4kEmL._AC_SX679_.jpg'
						price={1999.99}
						rating={4}
						title='ASUS ROG Strix G732LXS Full HD 300 Hz 17.3 Inch Gaming Laptop (Intel Core i7-10875H, NVIDIA GeForce RTX 2080 Super 8 GB, 32 GB RAM, 1 TB M.2 NVMe PCIe 3.0 SSD, Wi-Fi 6, Windows 10)'                
					/>	  
				</div>                        

			</div>
		</div>
	)
}

export default Home