import { React, useState } from "react";
import { getAuth } from "firebase/auth";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../Firebase/config";
import Login from "../../Components/Login/Login";
import Chart from "../../Components/chart/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import Sidebar from "../../Components/sidebar/Sidebar";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import TopBar from "../../Components/topbar/Topbar"

const Index = () => {
  // variable to check if user is signed in
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  auth.onAuthStateChanged((user) => {
    if (user) {
      // if user is signed in
      return setIsUserSignedIn(true);
    }
    //if user is not signed in
    return setIsUserSignedIn(false);
  });

  const signOut = () => {
    const auth = getAuth();
    auth.signOut();
  };

  if (isUserSignedIn) {
    //home page
    return (
      <>
        
       <h1>LANDING PAGE</h1>
        <Button variant="contained" onClick={signOut}>Logout</Button>
       
    
      </>
    );
  } else {
    //login page
    return (
      <>
        <Login />
      </>
    );
  }
};

export default Index;
