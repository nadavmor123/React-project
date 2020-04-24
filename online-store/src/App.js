import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignIn from "./pages/signin/signin.component";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import { GlobalProvider } from "./state/GlobalState";

function App() {
  return (
    <div className="app-container">
      <GlobalProvider>
        <NavBar />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={SignIn} />
      </GlobalProvider>
    </div>
  );
}

export default App;
