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
                    title='The lean startup'
                />
                <Product
                    id="234567"
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    price={19.99}
                    rating={2}
                    title='The lean startup'                
                />
            </div>

            <div className='home_row'>
                <Product/>
                <Product/>
                <Product/>
            </div>

            <div className='home_row'>
                <Product/>    
            </div>                        

        </div>
    </div>
  )
}

export default Home