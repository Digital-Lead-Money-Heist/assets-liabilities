import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NotFound from "./pages/404NotFound/NotFound";
import Index from "./pages/LandingPage/Index";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Declarant from "./pages/Declarant/Pages/Declarant";
import VerticalTabs from "./Components/DeclarantForm/FormNav";
import ErrorBoundary from "./utils/errorBoundary";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="declarant/*" element={<Declarant />} />
          <Route path="apply" element={<VerticalTabs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </QueryClientProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
