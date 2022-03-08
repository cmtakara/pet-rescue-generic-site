import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import './styles.css'


const UpdatePeopleForm = ({ fetchPeople, addPerson, setEditForm, editForm, updatePerson }) => {
    const [name, setName] = useState('')
    const [bestcontact, setBestcontact] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [admin, setAdmin] = useState('N')
    const [updaterights, setUpdaterights] = useState('N')
    const [fosterstatus, setFosterstatus] = useState('NONE')
    const [volunteerstatus, setVolunteerstatus] = useState('NONE')
    const [adopterstatus, setAdopterstus] = useState('NONE')
    const [volunteertransport, setVolunteertransport] = useState('N')
    const [volunteerevents, setVolunteerevents] = useState('N')
    const [notes, setNotes] = useState('')

    // const [updatePerson, setUpdatePerson] = useState({})

    // add all fields, ensure required fields are populated
    //required fields are: name, admin, updaterights, fosterstatus, volunteerstatus, adopterstatus
    // char can't be empty/null - volunteertransport, volunteerevents

    //bestcontact, notes, admin, updaterights



    const handleSubmit = e => {
        e.preventDefault()

        const form = document.getElementById('input-form')

        const newPerson = {
            name: name,
            bestcontact: bestcontact,
            phone: phone,
            email: email,
            address: address,
            admin: admin,
            updaterights: updaterights,
            fosterstatus: fosterstatus,
            volunteerstatus: volunteerstatus,
            adopterstatus: adopterstatus,
            volunteertransport: volunteertransport,
            volunteerevents: volunteerevents,
            notes: notes
        }
    
        if (editForm) {
            // updatePerson()
            console.log("in edit and update id is ", updatePerson.id)
            updatingPerson(newPerson, updatePerson.id)
            setEditForm(false)
            fetchPeople()
            
        } else {
            addPerson(newPerson)
        }

        form.reset()

    }

    const updatingPerson = async (newPerson, id) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/people/person/${id}`, newPerson)

            console.log(response)
            // setPeople(response.data)

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="ui centered grid bg-secondary bg-gradient">
        <form className="ui form" id="form-container" id='input-form' onSubmit={handleSubmit}>
            <div className="field">
                <label className='ui left aligned container'>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder= {editForm ? updatePerson.name : "Name"}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className='field'>
                <label className='ui left aligned container'>Admin Y/N</label>
                <input
                    type="text"
                    name="admin"
                    placeholder= {editForm ? updatePerson.admin : "Y/N"}
                    onChange={e => setAdmin(e.target.value)}
                />
                <label className='ui left aligned container'>Update Rights Y/N</label>
                <input
                    type="text"
                    name="updaterights"
                    placeholder= {editForm ? updatePerson.updaterights : "Y/N"}
                    onChange={e => setUpdaterights(e.target.value)}
                />
            </div>     
            <div className="field">
                <label className='ui left aligned container'>Best Contact</label>
                <input
                    type="text"
                    name="bestcontact"
                    placeholder= {editForm ? updatePerson.bestcontact : "Best Contact"}
                    onChange={e => setBestcontact(e.target.value)}
                />
            </div>
            <div className="field">
                <label className='ui left aligned container'>Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    placeholder= {editForm ? updatePerson.phone : "Phone Number"}
                    onChange={e => setPhone(e.target.value)}
                />
            </div>            
            <div className="field">
                <label className='ui left aligned container'>Email Address</label>
                <input
                    type="text"
                    name="email"
                    placeholder= {editForm ? updatePerson.email : "Email Address"}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="field">
                <label className='ui left aligned container'>Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder = {editForm ? updatePerson.address : "Address"}
                    onChange={e => setAddress(e.target.value)}
                />
            </div>
            <div className="field">
                <label className='ui left aligned container'>Notes</label>
                <input
                    type="text"
                    name="notes"
                    placeholder = {editForm ? updatePerson.notes : "Notes"}
                    onChange={e => setNotes(e.target.value)}
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

