export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: addItem(state.cart, action.payload)
      };
    case "SET_USER":
      return {
        ...state,
        user: setUser(action.payload)
      };

    default:
      return state;
  }
};

function setUser(user) {
  const newUser = user;
  localStorage.setItem("user", JSON.stringify({ user: newUser }));
  return newUser;
}

function addItem(cart, item) {
  const newCart = [];
  cart.forEach(el => {
    newCart.push(el);
  });

  newCart.push(item);
  localStorage.setItem("cart", JSON.stringify({ cart: newCart }));
  return newCart;
}
