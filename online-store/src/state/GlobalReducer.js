


export default (state, action) => {
	switch(action.type){
		case 'ADD_ITEM':
			return {
				...state,
				cart: addItem(state.cart, action.payload)
			}
		case 'SET_USER':
			return {
				...state,
				user: action.payload
			}

		default:
			return state;
	}
}

function addItem(cart, item){
	cart.push(item);
	return cart;
}