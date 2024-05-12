import React, { useState, useEffect } from "react";
import '../App.css';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';
import {addDoc } from "firebase/firestore"; // Correct import statement


function Guests() {
    // State variables to store form data
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [guests, setGuests] = useState([]);
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Save guest data to Firestore
        try {
            const docRef = await addDoc(collection(firestore, "guests"), {
                name,
                address,
                contact
            });
            alert('Thanks for becoming a guest!!');
            
            // Clear form fields after submission
            setName("");
            setAddress("");
            setContact("");
        } catch (error) {
            console.error("Error adding guest: ", error);
        }
    };
    useEffect(() => {
      // Function to fetch guests from Firestore
      const fetchGuests = async () => {
          const guestsCollection = collection(firestore, "guests");
          const guestsSnapshot = await getDocs(guestsCollection);
          const guestsData = guestsSnapshot.docs.map(doc => doc.data());
          setGuests(guestsData);
      };

      // Call the fetchGuests function
      fetchGuests();
  }, []);

    return (
        <div>
            <Navbar/>
            <div className="guest-container">
                <h1 className="guest-heading">Guest List</h1>
                <ul className="guest-list">
                {guests.map((guest, index) => (
                        <li className="guest-item" key={index}>
                            <div className="guest-details">
                                <h3 className="guest-name">{guest.name}</h3>
                                <p className="guest-address">{guest.address}</p>
                                <p className="guest-contact">{guest.contact}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <form className="guest-form" id="guestForm" onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input className="form-input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label className="form-label" htmlFor="address">Address:</label>
                    <textarea className="form-textarea" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
                    <label className="form-label" htmlFor="contact">Phone or Email:</label>
                    <input className="form-input" type="text" id="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    <button className="form-button" type="submit">Become A Guest</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Guests;
