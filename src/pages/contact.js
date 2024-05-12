import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function contact(){
    return(
<div>
<div className="sticky">
            <Navbar/>
            </div>
    <div className="cover">
        <div className="half-div disp-flex-row" style={{ height: "auto", backgroundColor: "white" }}>
            <div className="contact disp-flex-col">
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                <input type="hidden" name="access_key" value="96dfec8b-2442-41ef-b291-a01b5f495183"/>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" className="input-field" />
                    <p style={{ opacity: 0 }}>rrrr</p>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="input-field" />
                    <p style={{ opacity: 0 }}>rrrr</p>
                    <label htmlFor="subject">Subject</label>
                    <textarea name="subject" id="subject" rows="10"></textarea>
                    <p style={{ opacity: 0 }}>rrrr</p>
                    <button type="submit" className="button-primary" style={{ backgroundColor: "black" }}>Submit</button>
                </form>
            </div>
            <div className="contact disp-flex-col">
                <img src="/images/Contactus-bro.png" alt="Contactus" />
            </div>
        </div>
    </div>
    <Footer/>
</div>

    );
}
export default contact;