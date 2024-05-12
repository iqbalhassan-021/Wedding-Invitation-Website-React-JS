import React from "react";
import home from "./home";
import {firestore} from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
// Admin page component

function admin() {

    const showEditSite = () => {
        hideAll();
        document.getElementById('edit-site').style.display = 'block';
    };



    const showBlogs = () => {
        hideAll();
        document.getElementById('blogs').style.display = 'block';
    };

    const showGallery = () => {
        hideAll();
        document.getElementById('gallery').style.display = 'block';
    };



    const hideAll = () => {
        document.getElementById('edit-site').style.display = 'none';

        document.getElementById('blogs').style.display = 'none';
        document.getElementById('gallery').style.display = 'none';

    };

    const toggleNavbar = () => {
        const navbar = document.getElementById('navbarNav');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        } else {
            navbar.classList.add('show');
        }
    };





    //handlesitedata
    const handlesitedata = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      const db = getFirestore(); // Get a reference to the Firestore database
        let errorMessage = document.getElementById('error');
        let success = document.getElementById('success');
      // Create an object with form data
      const formData = {
      
          siteName: document.getElementById('siteName').value,
          groomName: document.getElementById('groomname').value,
          brideName: document.getElementById('bridename').value,
          coupleStory: document.getElementById('couplestory').value,
          locationDetails: document.getElementById('locationdetails').value,
          date: document.getElementById('date').value,
          instagramLink: document.getElementById('instagramLink').value,
          whatsappNumber: document.getElementById('whatsappNumber').value,
          email: document.getElementById('email').value,
          groomImage: document.getElementById('groomImage').files.length > 0 ? document.getElementById('groomImage').files[0].name : '',
          brideImage: document.getElementById('brideImage').files.length > 0 ? document.getElementById('brideImage').files[0].name : '',
          weddingLocation: document.getElementById('weddinglocation').files.length > 0 ? document.getElementById('weddinglocation').files[0].name : '',
          bannerImage: document.getElementById('bannerImage').files.length > 0 ? document.getElementById('bannerImage').files[0].name : ''
      };
  
      try {
          // Add the form data to the "formData" collection in Firestore
          const docRef = await addDoc(collection(db, "formData"), formData);
          console.log("Document written with ID: ", docRef.id);
          success.style.display = 'block';
          e.target.reset();
      } catch (error) {
        errorMessage.style.display = 'block';
        console.error("Error adding document: ", error);

      }
  };
  
    return (
        <>
            <head>
                <title>Admin Page</title>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                />
            </head>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Admin Panel</a>
                    <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={showEditSite}>Edit Site</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={showGallery}>Gallery</button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={showBlogs}>Blogs</button>
                            </li>

                            <li className="nav-item">
                            <Link to="/" className="no-decoration  btn btn-link" style={{color: ""}}>HOME</Link> <br></br>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container content" id="edit-site" style={{ display: "none" }}>
                <h2>Edit Site</h2>
                <div className="row">
                    <div className="col-md-6">
                                <div className="alert alert-success mt-3" role="alert" id="success" style={{display:"none"}}>
                              <p>Data saved</p>
                              </div>
                              <div className="alert alert-success mt-3" role="alert" style={{backgroundColor: "red",display:"none"}} id="error" >
                              <p style={{color:"white"}}>Something went wrong</p>
                              </div>
                        <form onSubmit={handlesitedata}>
                            <div className="form-group">
                                <label htmlFor="siteName">Site Name:</label>
                                <input type="text" id="siteName" className="form-control" required name="siteName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="groomname">Groom Name:</label>
                                <input type="text" id="groomname" className="form-control" required name="groomname"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="bridename">Bride Name:</label>
                                <input type="text" id="bridename" className="form-control" required name="bridename"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="couplestory">Couple Story:</label>
                                <textarea name="couplestory" id="couplestory" className="form-control" ></textarea>
                               
                            </div>
                            <div className="form-group">
                                <label htmlFor="locationdetails">Location Details:</label>
                                <textarea name="locationdetails" id="locationdetails" className="form-control" ></textarea>
                               
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date:</label>
                                <input type="date" name="date" id="date" className="form-control" />
                               
                            </div>
                            <div className="form-group">
                                <label htmlFor="instagramLink">Instagram Link:</label>
                                <input type="text" id="instagramLink" className="form-control" required name="instagramLink"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="whatsappNumber">WhatsApp Number:</label>
                                <input type="text" id="whatsappNumber" className="form-control" required name="whatsappNumber"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" className="form-control" required name="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="groomImage">Groom's Image:</label>
                                <input type="file" id="groomImage" className="form-control-file" accept="image/*" required name="groomImage"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="brideImage">Bride's Image:</label>
                                <input type="file" id="brideImage" className="form-control-file" accept="image/*" required name="brideImage"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="weddinglocation">Wedding Location:</label>
                                <input type="file" id="weddinglocation" className="form-control-file" accept="image/*" required name="weddinglocation"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="bannerImage">Banner Image:</label>
                                <input type="file" id="bannerImage" className="form-control-file" accept="image/*" required name="bannerImage"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                        </form>
                        
                    </div>
                </div>
            </div>

            <div className="container content" id="gallery" style={{ display: "none" }}>
                <h2>Add Images to Gallery</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="galleryImages">Select Images:</label>
                                <input type="file" id="galleryImages" className="form-control-file" accept="image/*" multiple required name="galleryImages"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add Images</button>
                        </form>
                    </div>
                </div>
                <div className="row">
        <div className="col-md-4 grid-item">
          <img src="images/groom.jpg" className="img-fluid" alt="Image 1" />
        </div>

      </div>
            </div>


            <div className="container content" id="home" style={{ display: "none" }}>
                <button className="button btn-primary" onClick={home}>Go To Home</button>
            </div>

            <div className="container content" id="blogs" style={{ display: "none" }}>
                <h2>Post a Blog</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="blogTitle">Blog Title:</label>
                                <input type="text" id="blogTitle" className="form-control" required name="blogTitle"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="blogImage">Blog Image:</label>
                                <input type="file" id="blogImage" className="form-control-file" accept="image/*" required name="blogImage"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="blogContent">Blog Content:</label>
                                <textarea id="blogContent" className="form-control" required name="blogContent"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Post Blog</button>
                        </form>
                    </div>
                </div>
            </div>


            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );
}

export default admin;
