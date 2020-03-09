import React, { useContext, useEffect } from "react";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../state/GlobalState";

const NavBar = () => {

	const { cart } = useContext(GlobalContext);

	useEffect(()=>{
		console.log('----navbar useEffect-----');
	});

	return (
		<div>
			<div>NavBar</div>
			<div>
				<Link to="/">Home</Link>
			</div>
			<div>
				<Link to="/shop">Shop</Link>
			</div>
			<div>
				items in cart: {cart.length}
			</div>
		</div>
	);
};

export default NavBar;
