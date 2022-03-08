import axios from 'axios';
import React, { useState } from 'react';

// import './styles.css'


const UpdatePeopleForm = ({ addPerson, editForm }) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [admin, setAdmin] = useState('N')
    const [updaterights, setUpdaterights] = useState('N')
    const [fosterstatus, setFosterstatus] = useState('NONE')
    const [volunteerstatus, setVolunteerstatus] = useState('NONE')
    const [adopterstatus, setAdopterstus] = useState('NONE')
    const [volunteertransport, setVolunteertransport] = useState('N')
    const [volunteerevents, setVolunteerevents] = useState('N')

    // add all fields, ensure required fields are populated
    //required fields are: name, 

    const handleSubmit = e => {
        e.preventDefault()
        const newPerson = {
            name: name,
            address: address,
            admin: admin,
            updaterights: updaterights,
            fosterstatus: fosterstatus,
            volunteerstatus: volunteerstatus,
            adopterstatus: adopterstatus,
            volunteertransport: volunteertransport,
            volunteerevents: volunteerevents
        }
    
        addPerson(newPerson)
    }


    //==========================================
    // UPDATE FROM HERE
    //==========================================
    // const handleAdd = e => {
    //     e.preventDefault()
    //     console.log('in handleAdd')
    //     console.log(animalToUpdate)
    //     addAnimal(animalToUpdate)
    // }

    // const addAnimal = async (newAnimal) => {
    //     // header1 = {'Access-Control-Allow-Origin': '*'}
    //     // config = {headers: header1}
    //     console.log('in try ', `http://localhost:8080/api/v1/${petType}s/add${petType}`, newAnimal)
    //     try {
    //         const response = await axios.post(`http://localhost:8080/api/v1/${petType}s/add${petType}`, newAnimal)
    //         fetchAnimals()
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const fetchAnimals = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:8080/api/v1/${petType}s/all${petType}s`)

    //         console.log(response)
    //         setAvailableCats(response.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const displayAnimals = e => {
    //     e.preventDefault()
    //     fetchAnimals()
    // }

    // const handleSubmit = e => {
    //     let newAnimal = {}
    //     e.preventDefault()

    //     if (e.target.animalName.value.trim() !== '') {
    //         newAnimal.name = e.target.animalName.value
    //     } else {
    //         newAnimal.name = "name is missing"
    //     }
    //     if (e.target.foster.value.trim() !== '') {
    //         setFoster(e.target.foster.value)
    //     }
    //     else {
    //         setFoster("NONE")
    //     }

    //     //   newAnimal.petType = petType
    //     newAnimal.age = e.target.ageNum.value + ' ' + ageUnit
    //     newAnimal.location = e.target.location.value
    //     newAnimal.other = e.target.other.value
    //     newAnimal.vetting = vetting
    //     newAnimal.bonded = bonded
    //     newAnimal.chip = chip
    //     newAnimal.foster = foster
    //     newAnimal.spayneuter = spayneuter
    //     newAnimal.adoptionstatus = adoptionstatus
    //     newAnimal.adopter = adopter
    //     newAnimal.imagename = imagename
    //     newAnimal.imageurl = e.target.imageurl.value
    //     newAnimal.issues = issues
    //     console.log(newAnimal)

    //     // updating to work with created DB and backend means adding

    //     // other - string (larger)
    //     // adopter - string

    //     //   setCatList([...catList, newAnimal])

    //     setAnimalToUpdate(newAnimal)
    //     setNewDisplay(JSON.stringify(newAnimal))
    //     //   const catListJSON = JSON.stringify(catList);
    //     //   console.log(catListJSON)

    //     //  localStorage.setItem("catList", catListJSON)

    // }

    // const handleTypeSelect = e => {
    //     console.log(e.target.value);
    //     setPetType(e.target.value)

    // }

    // const handleVettingSelect = e => {
    //     console.log(e.target.value);
    //     setVetting(e.target.value)

    // }

    // const handleChipSelect = e => {
    //     console.log(e.target.value);
    //     setChip(e.target.value)

    // }

    // const handleBondedSelect = e => {
    //     console.log(e.target.value);
    //     setBonded(e.target.value)

    // }

    // const handleNeuterSelect = e => {
    //     console.log(e.target.value);
    //     setSpayneuter(e.target.value)

    // }

    // const handleAdoptionStatusSelect = e => {
    //     console.log(e.target.value);
    //     setAdoptionstatus(e.target.value)

    // }

    // const handleAgeSelect = e => {
    //     console.log(e.target.value);
    //     setAgeUnit(e.target.value)

    // }

    // console.log(catList)

    return (
        <div className="ui centered grid bg-secondary bg-gradient">
        <form className="ui form" id="form-container" onSubmit={handleSubmit}>
            <div className="field">
                <label className='ui left aligned container'>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="field">
                <label className='ui left aligned container'>Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={e => setAddress(e.target.value)}
                />
            </div>
            <div className="ui right aligned container">

                <button className="ui button" type="submit">
                    {editForm ? "Edit" : "Submit"}
                </button>
            </div>
        </form>
    

      
            {/* <form onSubmit={handleSubmit}>
                <div className="m-3 flex-cont">
                    <label htmlFor="animalName" class="form-label">Animal's Name</label>
                    <input type="text" class="form-control" name='animalName' />
                </div>
                <div className="m-3 flex-cont justify-content-around flex-wrap">
                    <label htmlFor="animalType" class="form-label">
                        Choose cat or dog
                        <select value={petType} onChange={handleTypeSelect}>
                            <option value="">  </option>
                            <option value="cat">cat</option>
                            <option value="dog">dog</option>
                        </select>
                    </label>
                    <label htmlFor="vetting" class="form-label">
                        Choose Y or N for vetting completed  (choose N if unknown)
                        <select value={vetting} onChange={handleVettingSelect}>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                        </select>
                    </label>
                    <label htmlFor="bonded" class="form-label">
                        Choose Y or N for bonded 
                        <select value={bonded} onChange={handleBondedSelect}>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                        </select>
                    </label>
                    <label htmlFor="chip" class="form-label">
                        Choose Y or N for microchip (choose N if unknown)
                        <select value={chip} onChange={handleChipSelect}>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                        </select>
                    </label>
                    <label htmlFor="spayneuter" class="form-label">
                        Choose unknown, Y, or N for spay/neuter status
                        <select value={spayneuter} onChange={handleNeuterSelect}>
                            <option value="unknown">unknown</option>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                        </select>
                    </label>
                    <div class="flex-cont justify-content-around" >
                        <label htmlFor="adoptionstatus" class="form-label">
                            Choose adoption status
                            <select value={adoptionstatus} onChange={handleAdoptionStatusSelect}>
                                <option value="NONE">NONE</option>
                                <option value="APPLIED">APPLIED</option>
                                <option value="APPROVED">APPROVED</option>
                                <option value="COMPLETED">COMPLETED</option>
                            </select>
                            <label htmlFor="adopter" class="form-label">Adopter's Name</label>
                            <input type="text" class="form-control" name='adopter' />
                        </label>
                    </div>
                </div>
                <div className="m-3 flex-cont justify-content-around">
                    <label htmlFor="ageNum" class="form-label">Animal's Age</label>
                    <input type="number" class="form-control" name='ageNum' />
                    <label htmlFor="ageUnit" class="form-label">
                        Choose the units for age (weeks/months/years)
                        <select value={ageUnit} onChange={handleAgeSelect}>
                            <option value="">   </option>
                            <option value="weeks">weeks</option>
                            <option value="months">months</option>
                            <option value="years">years</option>
                        </select>
                    </label>

                </div>
                <div className="mb-3 flex-cont">
                    <label htmlFor="imagename" class="form-label">Image name (Short Caption)</label>
                    <input type="text" class="form-control" name='imagename' />

                    <label htmlFor="imageurl" class="form-label">Image URL (link to picture)</label>
                    <input type="text" class="form-control" name='imageurl' />
                </div>
                <div className="mb-3 flex-cont">
                    <label htmlFor="foster" class="form-label">Foster's name (or NONE)</label>
                    <input type="text" class="form-control" name='foster' />

                    <label htmlFor="location" class="form-label">Animal's Location</label>
                    <input type="text" class="form-control" name='location' />
                </div>
                <div className="mb-3">
                    <label htmlFor="issues" class="form-label">Known Issues</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='issues'></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="other" class="form-label">Notes</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='other'></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>

            </form>

            <div>
                This is the current animal, it is a {petType} <br></br>
                {newDisplay} <br></br>
                Do you want to add this {petType}?
                <form onSubmit={handleAdd}>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>

            <div>


            <form onSubmit={displayAnimals}>
                <label htmlFor="animalType" class="form-label">
                        Choose cat or dog
                        <select value={petType} onChange={handleTypeSelect}>
                            <option value="cat">cat</option>
                            <option value="dog">dog</option>
                        </select>
                    </label>
                    <button type="submit" class="btn btn-primary">Display existing</button>
            </form> */}

{/* 
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Vetting</th>
                        <th>image name</th>
                        <th>image url</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        availableCats.map(animal => {
                            return (
                                <tr key={animal.id}>
                                    <td data-label="Name">{animal.name}</td>
                                    <td data-label="Age">{animal.age}</td>
                                    <td data-label="Vetting">{animal.vetting}</td>
                                    <td data-label="Image Name">{animal.imagename}</td>
                                    <td data-label="Image URL">{animal.imageurl}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table> */}
            {/* </div> */}
        </div>
    );
}

export default UpdatePeopleForm;

