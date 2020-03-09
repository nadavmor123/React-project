import React, {createContext, useReducer} from 'react';
import GlobalReducer from './GlobalReducer';

const initialState = {
	cart: [],
	user: null,
	setUser: (user) => {},
	addToCart: (item) => {}
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

	const [state, dispatch] = useReducer(GlobalReducer, initialState);

	//actions
	function addToCart(item) {
		dispatch({
			type: 'ADD_ITEM',
			payload: item
		})
	}

	function setUser(user) {
		dispatch({
			type: 'SET_USER',
			payload: user
		})
	}

	return (
		<GlobalContext.Provider value={
			{
				user: state.user,
				cart: state.cart,
				addToCart,
				setUser
			}
		}>
			{children}
		</GlobalContext.Provider>
	);
}
