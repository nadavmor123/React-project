import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth, signOut, signInWithGoogle } from "../../Firebase/firebase.util";
import { GlobalState } from "../../state/GlobalState";
import "./signin.styles.scss";

const SignIn = () => {
  const history = useHistory();
  const { setUser, addToCart } = useContext(GlobalState);

  function logOut() {
    signOut();
    localStorage.removeItem("user");
  }

  useEffect(() => {
    let storage_user;
    auth.onAuthStateChanged(user => {
      if (!user) {
        setUser(null);
      } else {
        setUser(user);
      }
    });
  }, []);

  return (
    <div>
      <h1>Please signin with google :)</h1>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          logOut();
        }}
      >
        LogOut
      </button>
      <button
        onClick={() => {
          addToCart({ test: "test" });
        }}
      >
        test
      </button>
    </div>
  );
};

export default SignIn;
