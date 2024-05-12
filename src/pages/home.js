import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import '../App.css';

import Gallery from '../components/imageGallery';
import WeddingDateComponent  from '../components/weddingeDate';
import Couple from '../components/couple';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from 'react-router-dom';
function Home() {
    const [siteName, setSiteName] = useState('');
    const [bannerImage, setBannerImage] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(); // Get a reference to the Firestore database
      const formDataCollection = collection(db, 'formData'); // Reference to the "formData" collectionteInfo" collection

            try {
                // Get all documents from the "siteInfo" collection
                const querySnapshot = await getDocs(formDataCollection);

                // Check if there are any documents
                if (!querySnapshot.empty) {
                    // Get the first document (assuming there's only one)
                    const firstDocument = querySnapshot.docs[0];
                    // Get the site name from the document
                    const siteInfoData = firstDocument.data();
                    const siteNameData = siteInfoData.siteName;
                    const bannerImageData = siteInfoData.bannerImage;
                    // Set the site name state
                    setSiteName(siteNameData);
                    // Set the banner image state
                    setBannerImage(bannerImageData);
                }
            } catch (error) {
                console.error("Error retrieving site name: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="sticky">
            <Navbar/>
            </div>
    
             <div className="hero-container disp-flex-col" style={{backgroundImage: `url('images/${bannerImage}')`}}>
                    <div className="tab disp-flex-col blur">
                        <p className="hero-name">{siteName}</p>
                        <p>Congratulations for the wedding</p>
                        <br />
                   
               
                            <Link to="/guests" className=" no-decoration button-primary" style={{color: "white"}}>Become a Guest</Link><br></br>
                 
                    </div>
                </div>

                <Couple/>
                <Gallery/>
                <WeddingDateComponent />
                <Footer/>
        </div>
    );
}

export default Home;
