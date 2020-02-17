import React from 'react';
import { Link } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {

	return(
		<div className={`${size} menu-item`}
			 style={{backgroundImage : `url(${imageUrl})`}}>
			<Link to={'/' + title} className='content'>
				<h1 className='title'>{title}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</Link>
		</div>
	);
}

export default MenuItem;
