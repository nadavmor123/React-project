import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
git commit -am ""
    <div className="app-container">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
