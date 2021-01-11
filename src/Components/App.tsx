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
import {Gallery} from "../Components/GalleryPage"
function App() {
  return (
    <>
      {" "}
      <div className="container-fluid">
        <ToastContainer autoClose={3000} hideProgressBar={true} />
        <Navigation logo={logo} />
        <Route path="/" exact component={Homepage} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/form" exact component={ContactPage} />
      </div>
    </>
  );
}

export default App;
