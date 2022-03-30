import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Declarant.css";
import Login from "../../../Components/Login/Login";
import Topbar from "../../../Components/topbar/Topbar";
import UserList from "./userList/UserList";
import Home from "./home/Home";
import User from "./userList/UserList";
import NewUser from "./userList/UserList";
import ProductList from "./userList/UserList";
import Product from "./userList/UserList";
import NewProduct from "./userList/UserList";
// import { BrowserRouter,
import Sidebar from "../../../Components/sidebar/Sidebar";
import firebaseConfig from "../../../Firebase/config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import NotFound from "../../404NotFound/NotFound";

import VerticalTabs from "../../../Components/DeclarantForm/FormNav";

const Declarant = () => {
  // variable to check if user is signed in
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  const app = initializeApp(firebaseConfig)
  const auth = getAuth();
  auth.onAuthStateChanged((user) => {
    if (user) {
      // if user is signed in
      console.log('signed in as ',user.displayName)
      return setIsUserSignedIn(true);
      
    }
    //if user is not signed in
    console.log('not signed in')
    return setIsUserSignedIn(false);
  });

  //if user is signed in
  if (isUserSignedIn === true) {

    //home page
    return (
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<VerticalTabs />} />
            {/* <Route path="/user/:userId" element={<User />} /> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    );
  } else {
    //login page
    return <Login />;
  }
};

export default Declarant;
