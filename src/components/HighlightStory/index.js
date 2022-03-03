import React from 'react';

const HighlightStory = () => {
    return (
        <div class='bg-light' id='highlight-container'>
            <div id='highlight-img'>
            <h3>Highlight Photo</h3>
            <img src='https://images.unsplash.com/photo-1600357077527-930ccbaf7773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l0dGVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' className="animal-img" alt="four kittens" />
            </div>
            <div id='highlight-info'>
                <h4>Names:</h4>
                <p>...</p>
                <h5>Gender and Ages: </h5>
                <p>... <br></br> ... </p>
                <h5>Our Story</h5>
                <p>story about the highlight animal</p>
            </div>
        </div>
    );
}

export default HighlightStory;
