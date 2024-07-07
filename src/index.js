import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { LoadingProvider } from "./Context/LoaderContext";
import Loader from "./Component/Loader/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <LoadingProvider>
      <BrowserRouter>
      <Loader/>
        <App />
      </BrowserRouter>
      </LoadingProvider>
  </React.StrictMode>
);

reportWebVitals();
