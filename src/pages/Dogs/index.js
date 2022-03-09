import React, { useState, useEffect } from "react";
import axios from 'axios'

import HighlightStory from "../../components/HighlightStory";
import Footer from '../../components/Footer'

const Dogs = () => {
    const [availableDogs, setAvailableDogs] = useState([])

    useEffect(() => {
        fetchDogs()
    }, [])

    const fetchDogs = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/dogs/alldogs')

            console.log(response)
            setAvailableDogs(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div class='bg-secondary bg-gradient'>
            <h1>DOGS PAGE</h1>
            <HighlightStory />
            <h1>_______________</h1>

            <div id="animal-container">
            {
                availableDogs.map((dog) => {
                    return (
                        <div className="card animal-data"  style={{ width: '18rem' }} key={dog.id}>
                            <img src={dog.imageurl} className="animal-img" alt="..." />
                            <div className="card-body  overflow-auto" style={{ height: '18rem' }}>
                                <h3 className="card-title">{dog.imagename}</h3>
                                <h5 className="card-title">Name: {dog.name}</h5>
                                <h6 className="card-title">Age: {dog.age}</h6>
                                <h6 className="card-title">Part of a bonded set: {dog.bonded}</h6>
                                <a href="" target="_blank" className="btn btn-primary">More Information</a>
                            </div>
                        </div>
                    )
                })

            }
            </div>

            <h1>_______________</h1>

            <Footer />
        </div>

        
    )
}

export default Dogs