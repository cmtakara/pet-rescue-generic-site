import React, { useEffect, useState} from 'react';
import axios from 'axios';
import UpdatePeopleForm from '../../components/UpdatePeopleForm';


const UpdatePeople = () => {

    const [people, setPeople] = useState([])
    const [editForm, setEditForm] = useState(false)
    const [updatePerson, setUpdatePerson] = useState({});

    useEffect(() => {
        fetchPeople()
    }, [])

    const fetchPeople = async () => {
        try {
            const response = await axios.get('https://rescue-backend.herokuapp.com/api/v1/people/allpeople')

            console.log(response)
            setPeople(response.data)

        } catch (err) {
            console.log(err)
        }
    }

    const addPerson = async (newPerson) => {
        try {
            const response = await axios.post('https://rescue-backend.herokuapp.com/api/v1/people/addperson', newPerson)
            fetchPeople()
        } catch(err) {
            console.log(err)
        }
    }

    const deletePerson = async (id) => {
        try {
            const response = await axios.delete(`https://rescue-backend.herokuapp.com/api/v1/people/removeperson/${id}`)
            fetchPeople()
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            FORM TO UPDATE PEOPLE
            <UpdatePeopleForm fetchPeople={fetchPeople} addPerson={addPerson} setEditForm={setEditForm} editForm={editForm} updatePerson={updatePerson}/>
            <br></br>
            

            {/* <Form fetchStudents={fetchStudents} /> */}
            {/* <Form addStudent={addStudent} editForm={editForm}/> */}
            <div className="overflow-auto">
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Admin</th>
                        <th>Update Rights</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                        <th>Address</th>
                        <th>Best Contact</th>
                        <th>Foster Status</th>
                        <th>Foster Availability</th>
                        <th>Foster Current Animal</th>
                        <th>Volunteer Status</th>
                        <th>Volunteer Cleaning</th>
                        <th>Volunteer Transport</th>
                        <th>Volunteer for Events</th>
                        <th>Other Volunteer Availability</th>
                        <th>Adopter Status</th>
                        <th>Adopter Animal</th>
                        <th>Adopter Animal Name</th>
                        <th>Notes</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        people.map(person => {
                            return (
                                <tr key={person.id}>
                                    <td data-label="Name">{person.name}</td>
                                    <td data-label="Admin">{person.admin}</td>
                                    <td data-label="Update Rights">{person.updaterights}</td>
                                    <td data-label="Phone Number">{person.phone}</td>
                                    <td data-label="Email Address">{person.email}</td>
                                    <td data-label="Address">{person.address}</td>
                                    <td data-label="Best Contact">{person.bestcontact}</td>
                                    <td data-label="Foster Status">{person.fosterstatus}</td>
                                    <td data-label="Foster Availability">{person.fosteravailability}</td>
                                    <td data-label="Foster Current Animal">{person.fostercurrentanimal}</td>
                                    <td data-label="Volunteer Status">{person.volunteerstatus}</td>
                                    <td data-label="Volunteer Cleaning">{person.volunteercleaning}</td>
                                    <td data-label="Volunteer Transport">{person.volunteertransport}</td>
                                    <td data-label="Volunteer for Events">{person.volunteerevents}</td>
                                    <td data-label="Other Volunteer Availability">{person.volunteerother}</td>
                                    <td data-label="Adopter Status">{person.adopterstatus}</td>
                                    <td data-label="Adopter Animal">{person.adopteranimaltype}</td>
                                    <td data-label="Adopter Animal Name">{person.adopteranimalname}</td>
                                    <td data-label="Notes">{person.notes}</td>
                                    <td data-label="edit">
                                        <i 
                                            className="edit icon"
                                            onClick={() => {setEditForm(true); setUpdatePerson(person)}}
                                        ></i>
                                        <i 
                                            className="trash alternate icon"
                                            onClick={() => deletePerson(person.id)}
                                        ></i>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            </div>
        </div>
    );
}

export default UpdatePeople;

