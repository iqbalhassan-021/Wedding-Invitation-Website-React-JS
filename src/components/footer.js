import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
function Footer() {
    const [siteName, setSiteName] = useState('');
    const [instagramLink, setinstalink] = useState('');
    const [whatsappNumber, whatsappNumberLink] = useState('');
    const [email, setemail] = useState('');

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
                    const instalinkData = siteInfoData.instagramLink;
                    const whatsappNumberData = siteInfoData.whatsappNumber;
                    const emailData = siteInfoData.email;
                    // Set the site name state
                    setSiteName(siteNameData);
                    setinstalink(instalinkData);
                    whatsappNumberLink(whatsappNumberData);
                    setemail(emailData);

                }
            } catch (error) {
                console.error("Error retrieving site name: ", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
           <div className="footer">
                    <div className="cover footer">
                        <div className="footer-tab">

                           
                                <h1 className="fancy">
                            {siteName}
                            </h1>
        
                        </div>
                        <div className="footer-tab">
                            <h3>Pages</h3>
                           
                                <Link to="/" className="no-decoration" style={{color: "white"}}>HOME</Link> <br></br>
                                <Link to="/about" className=" no-decoration" style={{color: "white"}}>ABOUT</Link><br></br>
                                <Link to="/contact" className=" no-decoration" style={{color: "white"}}>CONTACT</Link><br></br>
                               <Link to="/gallery" className=" no-decoration" style={{color: "white"}}>GALLERY</Link><br></br>
                                <Link to="/blog" className=" no-decoration" style={{color: "white"}}>BLOG</Link><br></br>
                                <Link to="/guests" className=" no-decoration" style={{color: "white"}}>GUESTS</Link><br></br>
                                <Link to="/login" className=" no-decoration" style={{color: "white"}}>LOGIN</Link>
                                
                        </div>
                        <div className="footer-tab">
                            <h3>Contact</h3>
                            <a href={instagramLink} className="no-decoration" style={{color: "white"}}>
                                <p>Instgram</p>
                            </a>

                            <a href={`https://wa.me/${whatsappNumber}`} className="no-decoration" style={{color: "white"}}>
                                  <p>{whatsappNumber}</p>
                            </a>

                            <a href={`mailto:${email}`} className="no-decoration" style={{color: "white"}}>
                              <p>{email}</p>
                            </a>

                            <p>Developed by <a href="https://hassansbio.netlify.app/" className="no-decoration" style={{color: "white"}}><u>ENTERTAINER</u> </a></p>
                        </div>
                        <div className="footer-tab">
                            <form action="https://api.web3forms.com/submit" method="POST"  className="sub-holder ">
                            <input type="hidden" name="access_key" value="96dfec8b-2442-41ef-b291-a01b5f495183"/>
                                <input type="email" name="email" id="email" placeholder="email" />
                                <input type="submit" value="Subscribe" />
                                <p>
                                    Get notified by the updates!!!
                                </p>
                                <p>
                                    @2024 <a href="https://hassansbio.netlify.app/" className="no-decoration" style={{color: "white"}}><u>ENTERTAINER</u> </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default Footer;
