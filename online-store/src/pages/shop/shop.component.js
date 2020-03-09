import React, {useState, useEffect, useContext} from 'react';
import  CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';
import { GlobalContext } from "../../state/GlobalState";

const ShopPage = () => {

	const { cart } = useContext(GlobalContext);

	const [collections, setCollections] = useState([]);

	useEffect(() => {
		console.log('----shoppage useEffect-----');
		setCollections(SHOP_DATA);
	});

	return(
		<div>
			<h1>SHOP</h1>
			<div>items in cart: {cart.length}</div>
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
