import React, { useContext, useEffect, useState } from "react";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";
import { GlobalState } from "../../state/GlobalState";

const NavBar = () => {
  const { cart, user, addToCart } = useContext(GlobalState);

  useEffect(() => {
    console.log("----navbar [user] useEffect-----");
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log("----navbar [cart] useEffect-----");
    console.log(user);
  }, [cart]);

  useEffect(() => {
    console.log("----navbar initilize useEffect-----");
    console.log(cart);
    console.log(user);
  }, []);

  return (
    <div>
      <div>NavBar</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/shop">Shop</Link>
      </div>
      <div>items in cart: {cart.length}</div>
      <div>local user: {user && user.photoURL}</div>
      <button
        onClick={() => {
          addToCart();
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default NavBar;
