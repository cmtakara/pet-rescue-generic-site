import React from "react";
import Footer from '../../components/Footer'
// import GeneralContact from "../../components/GeneralContact";
import { ContactUs } from "../../components/ContactForm";

const Volunteer = () => {
    return (
        <div>
            <h1>VOLUNTEER FORM</h1>
            <p>Our volunteers are a dynamic, varied group with the common goal of helping to find safe, happy forever homes for the dogs and cats in the area.  </p> <br></br>
            <p>If you are interested in fostering, please fill out the foster application form by following the foster tab.</p> <br></br>
            <p>There are many different ways that you can volunteer your time with us.  Those include helping transport animals, volunteering at individual events, and helping take care of the animals that are waiting for homes.</p>
            
            {/* <GeneralContact /> */}
            <ContactUs />
            
            <h4> Name and contact information </h4>
            <Footer />
        </div>
    )
}

export default Volunteer