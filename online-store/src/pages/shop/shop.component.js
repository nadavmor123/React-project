import React, { useState, useEffect } from 'react';
import  CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';

const ShopPage = () => {

	const [collections, setCollections] = useState([]);

	useEffect(() => {
		setCollections(SHOP_DATA);
	});

	return(
		<div>
			<h1>SHOP</h1>

			<div>
				{
					collections.map( collection => (
						<CollectionPreview
							key={collection.id}
							title={collection.title}
							items={collection.items} />
					))
				}
			</div>
		</div>
	);
}

export default ShopPage;
