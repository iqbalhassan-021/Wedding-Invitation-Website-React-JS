import React from "react";

import '../App.css';

import Gallery from '../components/imageGallery';
import Navbar from "../components/navbar";
import Footer from "../components/footer";


function gallery() {


    return (
        <div>
            <div className="sticky">
            <Navbar/>
            </div>
  
                <Gallery/>

<Footer/>
        </div>
    );
}

export default gallery;