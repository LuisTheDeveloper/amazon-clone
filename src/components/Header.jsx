import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './css/Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

export const Header = () => {
	const [{basket}, dispatch] = useStateValue()

	return (
		<div className='header'>
			<Link to='/'>
				<img 
					alt='logo'
					className='header_logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
				/>
			</Link>
			<div className='header_search'>
				<input className='header_searchInput' type='text'/>
				<SearchIcon className='header_searchIcon'/>
			</div>
			<div className='header_nav'>

				<div className='header_option'>
					<span className='header_optionLineOne'>Hello, Guest</span>
					<span className='header_optionLineTwo'>Sign In</span>
				</div>

				<div className='header_option'>
					<span className='header_optionLineOne'>Returns</span>
					<span className='header_optionLineTwo'>& Orders</span>                
				</div>

				<div className='header_option'>
					<span className='header_optionLineOne'>Your </span>
					<span className='header_optionLineTwo'>Prime</span>                
				</div>

				<Link to='/checkout'>
					<div className='header_optionBasket'>
						<ShoppingBasketIcon />
						<span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>             
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header