import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


import '../App.css';


import Date from '../components/weddingeDate';
import Couple from '../components/couple';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function About() {

    const [weddingLocation, setweddingLocation] = useState('');
    const [locationDetails, setlocationDetails] = useState('');

  
    useEffect(() => {
      const fetchData = async () => {
        const db = getFirestore(); // Get a reference to the Firestore database
        const formDataCollection = collection(db, 'formData'); // Reference to the "formData" collection
  
        try {
          // Get all documents from the "formData" collection
          const querySnapshot = await getDocs(formDataCollection);
          
          // Check if there are any documents
          if (!querySnapshot.empty) {
            // Get the first document (assuming there's only one)
            const firstDocument = querySnapshot.docs[0];
            // Get the wedding date, banner image, groom name, and bride name from the document
            const formData = firstDocument.data();
            const { weddingLocation, locationDetails } = formData;
            // Update state with the wedding date, banner image, groom name, and bride name

            setweddingLocation(weddingLocation);
            setlocationDetails(locationDetails);

          }
        } catch (error) {
          console.error("Error retrieving documents: ", error);
        }
      };
  
      fetchData();
    }, []);
  

    return (
        <div>
            <div className="sticky">
            <Navbar/>
            </div>

                <Couple/>
                <div className="wrapper " >
                    <div className="cover disp-flex-row ">
                        <div className="tab disp-flex-row story">
                            <div className="tab destination">
                            <div className="couple-img" style={{backgroundImage: `url("images/${weddingLocation}")`}}></div>
                            </div>
                            <div className="tab">
                                <p className="fancy">
                                    Wedding Destination
                                  </p>
                                <p>
                                   {locationDetails}
                                </p>
                            </div>
        
                        </div>
                    </div>
                </div>
                <Date/>
      <Footer/>
        </div>
    );
}

export default About;