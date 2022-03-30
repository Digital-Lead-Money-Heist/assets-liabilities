import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import firebaseConfig from "./Firebase/config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Declarant from "./pages/Declarant/Pages/Declarant";


function App() {
  return (
    <div className="App">
      <Declarant />
    </div>
  );
}

export default App;
