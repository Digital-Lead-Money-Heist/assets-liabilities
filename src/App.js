import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Declarant from "./pages/Declarant/Pages/Declarant";
import { AuthProvider } from "./Firebase/Auth";



function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Declarant />
      </AuthProvider>
      
    </div>
  );
}

export default App;
