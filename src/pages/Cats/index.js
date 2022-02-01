import React from "react";

import HighlightStory from "../../components/HighlightStory";
import Footer from '../../components/Footer'

const Cats = () => {
    return (
        <div>
            <h1>CATS PAGE</h1>
            <HighlightStory />
            <h3>Then list avaialble cats with images and descriptions</h3>
            <h4>cats objects - in an array - then access image and description but not other information</h4>
            <Footer />
        </div>
    )
}

export default Cats
