import React, { useState, useEffect } from "react";
import axios from 'axios'


import HighlightStory from "../../components/HighlightStory";
import Footer from '../../components/Footer'



const Cats = () => {

    // const [availableBreeds, setAvailableBreeds] = useState([])
    const [availableCats, setAvailableCats] = useState([])
    // const [userName, setUserName] = useState('')

    useEffect(() => {
        fetchCats()
    }, [])

    const fetchCats = async () => {
        try {
            const response = await axios.get('https://rescue-backend.herokuapp.com/api/v1/cats/allcats')

            console.log(response)
            setAvailableCats(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     console.log('submitting')

    //     getCatBreedList();
    //     // console.log('available cats', availableBreeds);


    // }

    // const getCatBreedList = async () => {
    //     const newCatBreedList = []
    //     try {
    //         const response = await axios.get('https://api.thecatapi.com/v1/breeds')
    //         // console.log(response.data.length)
    //         response.data.forEach(breed => {
    //             // let breedId = {
    //             //     name: breed.name;
    //             //     idCode: breed.id
    //             // }
    //             newCatBreedList.push({ "name": breed.name, "idCode": breed.id })
    //             // console.log(breed.id)

    //         })
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    //     // console.log('newcatBreedList', newCatBreedList)
    //     setAvailableBreeds(newCatBreedList)

    //     getCatList();

    // }

    // const getCatList = async () => {
    //     const newCatList = []
    //     console.log('in getcatlist', availableBreeds)
    //     let numCats = 5 + Math.floor(Math.random() * 15);
    //     let maxBreed = availableBreeds.length;
    //     console.log('numcats is', numCats, 'and maxbreed is ', maxBreed)
    //     for (let i = 0; i < numCats; i++) {
    //         let index = Math.floor(Math.random() * maxBreed);
    //         // console.log('next index is: ', index)
    //         try {
    //             const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${availableBreeds[index].idCode}`)
    //             console.log(response.data[0].url)
    //             console.log(response.data[0].breeds[0].name)
    //             console.log(response.data[0].breeds[0].cfa_url)
    //             console.log(response.data[0].breeds[0].description)
    //             console.log(response.data[0].breeds[0].temperament)
    //             console.log(response.data[0].breeds[0].vcahospitals_url)
    //             console.log(response.data[0].breeds[0].wikipedia_url)
    //             newCatList.push({
    //                 "imageUrl": response.data[0].url,
    //                 "breedName": response.data[0].breeds[0].name,
    //                 "cfaUrl": response.data[0].breeds[0].cfa_url,
    //                 "description": response.data[0].breeds[0].description,
    //                 "temperament": response.data[0].breeds[0].temperament,
    //                 "vcaUrl": response.data[0].breeds[0].vcahospitals_url,
    //                 "wikipediaUrl": response.data[0].breeds[0].wikipedia_url
    //             })
    //             console.log('in try newcatlist ', newCatList)
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     }

    // }

    return (
        <div class='bg-secondary bg-gradient'>
            <HighlightStory />

            <h1>_______________</h1>

            <div id="animal-container">
            {
                availableCats.map((cat) => {
                    return (
                        <div className="card animal-data"  style={{ width: '18rem' }} key={cat.id}>
                            <img src={cat.imageurl} className="animal-img" alt="..." />
                            <div className="card-body  overflow-auto" style={{ height: '18rem' }}>
                                <h3 className="card-title">{cat.imagename}</h3>
                                <h5 className="card-title">Name: {cat.name}</h5>
                                <h6 className="card-title">Age: {cat.age}</h6>
                                <h6 className="card-title">Part of a bonded set: {cat.bonded}</h6>
                                <a href="" target="_blank" className="btn btn-primary">More Information</a>
                            </div>
                        </div>
                    )
                })

            }
            </div>
            <h1>_______________</h1>

            {/* Contact Form, may be added back in later */}
            {/* <form>
                <label htmlFor='userName'>Name</label>
                <input type='text' name='userName' value={userName} />
                <br></br>
                <label htmlFor='userInput'>Message:</label>
                <textarea className="form-control" rows="5" ></textarea>

            </form> */}

            <Footer />
        </div>
    )
}

export default Cats
