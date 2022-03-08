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
            const response = await axios.get('http://localhost:8080/api/v1/people/allpeople')

            console.log(response)
            setPeople(response.data)

        } catch (err) {
            console.log(err)
        }
    }

    const addPerson = async (newPerson) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/people/addperson', newPerson)
            fetchPeople()
        } catch(err) {
            console.log(err)
        }
    }

    const deletePerson = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/people/removeperson/${id}`)
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
