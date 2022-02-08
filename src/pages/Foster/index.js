import React from "react";

import Footer from '../../components/Footer';
// import GeneralContact from "../../components/GeneralContact";
import { ContactUs } from "../../components/ContactForm";



const Foster = () => {
    return (
        <div>
            <h1>FOSTER FORM</h1>
            <p>Information on fostering</p>

            <p>Our volunteers are a dynamic, varied group with the common goal of helping to find safe, happy forever homes for the dogs and cats in the area.  </p> <br></br>
            <p>If you are interested in fostering, please fill out the form below.</p> <br></br>
            
            {/* <GeneralContact /> */}
            <ContactUs />
            
            
            <Footer />
        </div>
    )
}

export default Foster