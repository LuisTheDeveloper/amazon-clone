import React from 'react'
import './css/Product.css'

export const Product = ({title, image, price, rating}) => {
  return (
    <div className='product'>
        <div className='produc_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>£</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_, i) =>(
                    <p>⭐</p>
                ))}
            </div>
        </div>

        <img alt='imageprod' src={image}/>
        <button>Add to Basket</button>
    </div>
  )
}

export default Product