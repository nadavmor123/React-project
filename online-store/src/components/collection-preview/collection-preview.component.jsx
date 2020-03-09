import React, {useContext, useEffect} from 'react';
import './collection-preview.styles.scss';
import { GlobalContext } from "../../state/GlobalState";


const CollectionPreview = ({id, title, items}) => {

	const { addToCart } = useContext(GlobalContext);

	useEffect(()=>{
		console.log('----directory useEffect-----');
	}, []);

	return(
		<div className='collection-preview'>
			<h1 className='title'>{title}</h1>
			<div className='preview'>{
				items.map(item => (
					<div key={item.id}>
						{item.name}
						<button onClick={() => { addToCart(item) }}>ADD</button>
					</div>
				))
			}</div>
		</div>
	);
}

export default CollectionPreview;
