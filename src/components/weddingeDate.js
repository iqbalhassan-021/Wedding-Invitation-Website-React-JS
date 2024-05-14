import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Date = () => {
  const [weddingDate, setWeddingDate] = useState('');
  const [bannerImage, setBannerImage] = useState('');

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
          // Get the wedding date and banner image from the document
          const formData = firstDocument.data();
          const weddingDateData = formData.date;
          const bannerImageData = formData.bannerImage;
          // Update state with the wedding date and banner image
          setWeddingDate(weddingDateData);
          setBannerImage(bannerImageData);
        }
      } catch (error) {
        console.error("Error retrieving documents: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="half-div" style={{backgroundImage: `url('${bannerImage}')`, height: "300px"}}></div>
        <div className="half-div disp-flex-row">
          <h1 className="fancy">Wedding date</h1>
          <span style={{opacity: "0%"}}>This text is invisible.</span>
          <h1>{weddingDate}</h1>
        </div>
      </div>
    </div>
  );
};

export default Date;
