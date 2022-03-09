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
    const [fosteravailability, setFosteravailability] = useState('')
    const [fostercurrentanimal, setFostercurrentanimal] = useState('')
    const [volunteerstatus, setVolunteerstatus] = useState('NONE')
    const [volunteercleaning, setVolunteercleaning] = useState('')
    const [volunteerother, setVolunteerother] = useState('')
    const [volunteertransport, setVolunteertransport] = useState('N')
    const [volunteerevents, setVolunteerevents] = useState('N')
    const [adopterstatus, setAdopterstus] = useState('NONE')
    const [adopteranimaltype, setAdopteranimaltype] = useState('')
    const [adopteranimalname, setAdopteranimalname] = useState('')
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
            fosteravailability: fosteravailability,
            fostercurrentanimal: fostercurrentanimal,
            volunteerstatus: volunteerstatus,
            volunteercleaning: volunteercleaning,
            volunteertransport: volunteertransport,
            volunteerother: volunteerother,
            volunteerevents: volunteerevents,
            adopterstatus: adopterstatus,
            adopteranimaltype: adopteranimaltype,
            adopteranimalname: adopteranimalname,
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
                <label className='ui left aligned container'>Foster Status</label>
                <input
                    type="text"
                    name="fosterstatus"
                    placeholder = {editForm ? updatePerson.fosterstatus : "NONE/APPLIED/APPROVED/DENIED/ACTIVE/INACTIVE"}
                    onChange={e => setFosterstatus(e.target.value)}
                />
            </div>            
            <div className="field">
                <label className='ui left aligned container'>Foster Availability</label>
                <input
                    type="text"
                    name="fosteravailability"
                    placeholder = {editForm ? updatePerson.fosteravailability : "NONE/LIMITED/OPEN"}
                    onChange={e => setFosteravailability(e.target.value)}
                />
            </div>            
            <div className="field">
                <label className='ui left aligned container'>Foster Current Animal</label>
                <input
                    type="text"
                    name="fostercurrentanimal"
                    placeholder = {editForm ? updatePerson.fostercurrentanimal : "Name of Animal or leave empty"}
                    onChange={e => setFostercurrentanimal(e.target.value)}
                />
            </div>
            <div className="field">
                <label className='ui left aligned container'>Volunteer Status</label>
                <input
                    type="text"
                    name="volunteerstatus"
                    placeholder = {editForm ? updatePerson.volunteerstatus : "NONE/APPLIED/APPROVED/DENIED/ACTIVE/INACTIVE"}
                    onChange={e => setVolunteerstatus(e.target.value)}
                />
            </div>            
            <div className="field">
                <label className='ui left aligned container'>Volunteer Cleaning Information</label>
                <input
                    type="text"
                    name="volunteercleaning"
                    placeholder = {editForm ? updatePerson.volunteercleaning : "day(s) AM/PM location"}
                    onChange={e => setVolunteercleaning(e.target.value)}
                />
            </div>            
            <div className="field">
                <label className='ui left aligned container'>Volunteer for Transport</label>
                <input
                    type="text"
                    name="volunteertransport"
                    placeholder = {editForm ? updatePerson.volunteertransport : "Y/N"}
                    onChange={e => setVolunteertransport(e.target.value)}
                />
            </div>            
            <div className="field">
                <label className='ui left aligned container'>Volunteer for Events</label>
                <input
                    type="text"
                    name="volunteerevents"
                    placeholder = {editForm ? updatePerson.volunteerevents : "Y/N"}
                    onChange={e => setVolunteerevents(e.target.value)}
                />
            </div>                
            <div className="field">
                <label className='ui left aligned container'>Other Ways Willing to Volunteer</label>
                <input
                    type="text"
                    name="volunteerother"
                    placeholder = {editForm ? updatePerson.volunteerother : "specific volunteer activities, availability, and limitations"}
                    onChange={e => setVolunteerother(e.target.value)}
                />
            </div>            
            <div className="field">
                <label className='ui left aligned container'>Adopter Status</label>
                <input
                    type="text"
                    name="adopterstatus"
                    placeholder = {editForm ? updatePerson.adopterstatus : "NONE/APPLIED/APPROVED/DENIED/COMPLETED"}
                    onChange={e => setAdopterstus(e.target.value)}
                />
            </div>            
            <div className="field">
                <label className='ui left aligned container'>Adopter Animal Type</label>
                <input
                    type="text"
                    name="adopteranimaltype"
                    placeholder = {editForm ? updatePerson.adopteranimaltype : "cat/dog"}
                    onChange={e => setAdopteranimaltype(e.target.value)}
                />
            </div>            
            <div className="field">
                <label className='ui left aligned container'>Adopter Animal Name</label>
                <input
                    type="text"
                    name="adopteranimalname"
                    placeholder = {editForm ? updatePerson.adopteranimalname : "Name of Animal or leave empty"}
                    onChange={e => setAdopteranimalname(e.target.value)}
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

    
        </div>
    );
}

export default UpdatePeopleForm;

