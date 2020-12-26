import React from "react";
import { Navigation } from "../Components/NavigationBar";
import logo from "../Logos/EJI.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import log from "../Logos/eb.jpg";

import "../Css/App.css";

import { ContactPage } from "../Components/ContactForm";
import { Route } from "react-router-dom";
import { Homepage } from "../Components/Homepage";
function App() {
  return (
    <>
      {" "}
      <div className="container-fluid">
        <ToastContainer autoClose={8000} hideProgressBar={false} />
        <Navigation logo={logo} />
        <Route path="/" exact component={Homepage} />
        <Route path="/form" exact component={ContactPage} />
      </div>
    </>
  );
}

export default App;
