import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function Couple() {


    const [groomName, setGroomName] = useState('');
    const [brideName, setBrideName] = useState('');
    const [groomImage, setgroomImage] = useState('');
    const [brideImage, setbrideImage] = useState('');
    const [coupleStory, setcoupleStory] = useState('');
  
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
            const { groomName, brideName , coupleStory,brideImage,groomImage} = formData;
            // Update state with the wedding date, banner image, groom name, and bride name

            setGroomName(groomName);
            setBrideName(brideName);
            setcoupleStory(coupleStory);
            setbrideImage(brideImage);
            setgroomImage(groomImage);
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
                    <div className="cover ">
                        <p className="fancy"> The Couple</p>
                        <div className="tab disp-flex-row couple">
                            <div className="tab couple" >

                            <div className="couple-img" style={{backgroundImage: `url("${groomImage}")`}}></div>

                                <p className="fancy">
                                    The Groom 
                                </p>
                                <p>
                                    ~{groomName}
                                </p>
                            </div>
                            <div className="tab">
                                <img src="couple.jpg" alt="" className="center-img" />
                            </div>
                            <div className="tab couple">
                                <div className="couple-img" style={{backgroundImage: `url("${brideImage}")`}}></div>
                                <p className="fancy">
                                    The Bride 
                                </p>
                                <p>
                                    ~{brideName}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper " style={{backgroundColor: "#f0f0f0"}}>
                    <div className="cover disp-flex-row ">
                        <div className="tab disp-flex-row story">

                            <div className="tab">
                                <p className="fancy">
                                    Our Story
                                </p>
                                <p>
                                  {coupleStory}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Couple;
