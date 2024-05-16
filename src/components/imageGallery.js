import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

function Gallery() {
    const [imageUrls, setImageUrls] = useState([]); // State to store image URLs

    useEffect(() => {
        // Function to fetch image URLs from Firestore
        const fetchImages = async () => {
            const db = getFirestore(); // Get Firestore instance
            const galleryRef = collection(db, 'Gallery'); // Reference to 'Gallery' collection
            const snapshot = await getDocs(galleryRef); // Get documents from 'Gallery' collection

            const urls = []; // Array to store image URLs

            snapshot.forEach((doc) => {
                // Iterate through each document and push image URLs to the array
                urls.push(doc.data().image);
            });

            setImageUrls(urls); // Update state with image URLs
        };

        fetchImages(); // Call fetchImages function when component mounts
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div>
            <div className="container">
                <div className="cover">
                    <div className="gallery">
                        {/* Map through imageUrls array and render <img> elements */}
                        {imageUrls.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Image ${index}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
