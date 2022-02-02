import React, { useState } from "react";
import axios from 'axios'

import HighlightStory from "../../components/HighlightStory";
import Footer from '../../components/Footer'

const Cats = () => {

    const [availableCats, setAvailableCats] = useState([])
    // const getCatBreedList = async () => {
    //     const newCatBreedList = []
    //     try {
    //         const response = await axios.get('https://api.thecatapi.com/v1/breeds')
    //         // console.log(response.data.length)
    //         response.data.forEach(breed => {
    //             newCatBreedList.push(breed.name)
    //             // console.log(breed.name)

    //         })
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    //     console.log('newcatBreedList', newCatBreedList)
    //     setAvailableCats(newCatBreedList)
    // }

    // const getCatList = async () => {
    //     const newCatList = ['nothing', 'yet']
    //     try {
    //         const response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=beng')
    //         console.log(response.data[0].url)
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    // const setSampleCatList = (catBreedList) => {
    //     let numCats = (Math.ceil(Math.random()*15)+5)
    //     const catList = [];
    //     // let numCats = 15
    //     let maxCat = catBreedList.length;
    //     console.log('end of breed array is', maxCat)

    //     console.log('in setSampleCatList and numCats is ', numCats);

    //     console.log('in setsamplecatlist and cat breedlist is ', catBreedList)
        
    //     for(let i=0; i<numCats; i++) {
    //         let breedIndex = Math.floor(Math.random() * maxCat)
    //         catList.push(catBreedList[breedIndex])
    //     }
    //     console.log('in setsamplecatlist and catlist is', catList)
    //     return catList
    // }


    // const catBreedList = getCatBreedList();
    // console.log('after calling get cat breed list', catBreedList);
    // // const sampleCatList = setSampleCatList(catBreedList);


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
