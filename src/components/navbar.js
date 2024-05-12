import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function Navbar() {
    const [siteName, setSiteName] = useState('');

    useEffect(() => {
        const fetchData  = async () => {
            const db = getFirestore(); // Get a reference to the Firestore database
            const formDataCollection = collection(db, 'formData'); // Reference to the "formData" collection


            try {
                // Get all documents from the "siteInfo" collection
                const querySnapshot = await getDocs(formDataCollection);

                // Check if there are any documents
                if (!querySnapshot.empty) {
                    // Get the first document (assuming there's only one)
                    const firstDocument = querySnapshot.docs[0];
                    // Get the site name from the document
                    const formData = firstDocument.data();
                    const siteNameData = formData.siteName;
                    // Set the site name state
                    setSiteName(siteNameData);
                }
            } catch (error) {
                console.error("Error retrieving site name: ", error);
            }
        };

        fetchData ();
    }, []);

    function showNav() {
        var nav = document.getElementById("mobilenav");
        if (nav.style.display === "none") {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
        }
    }


    return (
        <div>
            <div className="wrapper sticky">
                <div className="cover">
                    <div className="header">
                        
                            <Link to="/" className="fancy no-decoration">{siteName}</Link>
                        
                        <div className="navBar">

                                <div className="tab disp-flex-row">
                                <Link to="/" className="no-decoration">HOME</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/about" className=" no-decoration">ABOUT</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/contact" className=" no-decoration">CONTACT</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/gallery" className=" no-decoration">GALLERY</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/blog" className=" no-decoration">BLOG</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/guests" className=" no-decoration">GUESTS</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/login" className=" no-decoration">LOGIN</Link>
                                </div>
                        
                        </div>
                        <button className="bars" onClick={showNav}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                    <div className="mobile-nav" id="mobilenav">
                    <div className="tab disp-flex-row">
                                <Link to="/" className="no-decoration">HOME</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/about" className=" no-decoration">ABOUT</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/contact" className=" no-decoration">CONTACT</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/gallery" className=" no-decoration">GALLERY</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/blog" className=" no-decoration">BLOG</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/guests" className=" no-decoration">GUESTS</Link>
                                </div>
                        

                                <div className="tab disp-flex-row">
                                    <Link to="/login" className=" no-decoration">LOGIN</Link>
                                </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
