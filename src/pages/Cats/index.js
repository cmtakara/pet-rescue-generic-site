import React, { useState } from "react";
import axios from 'axios'


import HighlightStory from "../../components/HighlightStory";
import Footer from '../../components/Footer'
import CatInfo from "../../components/CatInfo";

const Cats = () => {

    const [availableBreeds, setAvailableBreeds] = useState([])
    const [availableCats, setAvailableCats] = useState([])
    const [userName, setUserName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submitting')

        getCatBreedList();
        // console.log('available cats', availableBreeds);


    }

    const getCatBreedList = async () => {
        const newCatBreedList = []
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/breeds')
            // console.log(response.data.length)
            response.data.forEach(breed => {
                // let breedId = {
                //     name: breed.name;
                //     idCode: breed.id
                // }
                newCatBreedList.push({ "name": breed.name, "idCode": breed.id })
                // console.log(breed.id)

            })
        }
        catch (error) {
            console.log(error);
        }
        // console.log('newcatBreedList', newCatBreedList)
        setAvailableBreeds(newCatBreedList)

        getCatList();

    }

    const getCatList = async () => {
        const newCatList = []
        console.log('in getcatlist', availableBreeds)
        let numCats = 5 + Math.floor(Math.random() * 15);
        let maxBreed = availableBreeds.length;
        console.log('numcats is', numCats, 'and maxbreed is ', maxBreed)
        for (let i = 0; i < numCats; i++) {
            let index = Math.floor(Math.random() * maxBreed);
            // console.log('next index is: ', index)
            try {
                const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${availableBreeds[index].idCode}`)
                console.log(response.data[0].url)
                console.log(response.data[0].breeds[0].name)
                console.log(response.data[0].breeds[0].cfa_url)
                console.log(response.data[0].breeds[0].description)
                console.log(response.data[0].breeds[0].temperament)
                console.log(response.data[0].breeds[0].vcahospitals_url)
                console.log(response.data[0].breeds[0].wikipedia_url)
                newCatList.push({
                    "imageUrl": response.data[0].url,
                    "breedName": response.data[0].breeds[0].name,
                    "cfaUrl": response.data[0].breeds[0].cfa_url,
                    "description": response.data[0].breeds[0].description,
                    "temperament": response.data[0].breeds[0].temperament,
                    "vcaUrl": response.data[0].breeds[0].vcahospitals_url,
                    "wikipediaUrl": response.data[0].breeds[0].wikipedia_url
                })
                console.log('in try newcatlist ', newCatList)
            }
            catch (error) {
                console.log(error);
            }
        }
        setAvailableCats(newCatList)
    }

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

    console.log('available breeds later', availableBreeds);
    console.log('available cats', availableCats)

    return (
        <div>
            <h1>CATS PAGE</h1>
            <HighlightStory />
            <h3>Then list avaialble cats with images and descriptions</h3>
            <p> Select whether you want to use cats from the saved list or a representative set of cats</p>
            <form onSubmit={handleSubmit}>
                <label><input type='radio' name='catSelect' value='random' />Representative</label>
                <label><input type='radio' name='catSelect' value='knownList' />Saved List</label>
                <input type='submit' value='submit' />
            </form>

            <h4>cats objects - in an array - then access image and description but not other information</h4>

            <h1>_______________</h1>

            <div id="animal-container">
            {
                availableCats.map((cat) => {
                    return (
                        <div className="card animal-data"  style={{ width: '18rem' }}>
                            <img src={cat.imageUrl} className="animal-img" alt="..." />
                            <div className="card-body  overflow-auto" style={{ height: '18rem' }}>
                                <h5 className="card-title">{cat.breedName}</h5>
                                <h6 className="card-title">{cat.temperament}</h6>
                                <p className="card-text">{cat.description}</p>
                                <a href={cat.wikipediaUrl} target="_blank" className="btn btn-primary">More Information</a>
                            </div>
                        </div>
                    )
                })

            }
            </div>
            <h1>_______________</h1>
            <form>
                <label htmlFor='userName'>Name</label>
                <input type='text' name='userName' value={userName} />
                <br></br>
                <label htmlFor='userInput'>Message:</label>
                <textarea className="form-control" rows="5" ></textarea>

            </form>





            <Footer />
        </div>
    )
}

export default Cats
