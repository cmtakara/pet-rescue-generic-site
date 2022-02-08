import React from "react";
import HighlightStory from "../../components/HighlightStory";
import Footer from '../../components/Footer'
import GeneralContact from "../../components/GeneralContact";
import { ContactUs } from "../../components/ContactForm";

const Home = () => {
    return (
        <div>
            <h1>WELCOME TO ... RESCUE </h1>
            <p>Our mission is to... </p>
            <p>We are primarily located in...  but we have volunteers and fosters throughout...</p>

            <HighlightStory />

            <h2>Contact Us </h2>
            {/* <GeneralContact /> */}

            <ContactUs />

            <Footer />
        </div>
    )
}

export default Home