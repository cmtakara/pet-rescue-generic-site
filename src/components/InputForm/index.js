import axios from 'axios';
import React, { useState} from 'react';


const InputForm = () => {
const [animalToUpdate, setAnimalToUpdate] = useState([])
const [newDisplay, setNewDisplay] = useState('')
const [availableCats, setAvailableCats] = useState([])

const [petType, setPetType] = useState('cat')
const [vetting, setVetting] = useState('N')
const [ageUnit, setAgeUnit] = useState('')
const[chip, setChip] = useState('N')
const[bonded, setBonded] = useState('')
const [foster, setFoster] = useState('NONE')
const [spayneuter, setSpayneuter] = useState('unknown')
const [adoptionstatus, setAdoptionstatus] = useState('NONE')
const [imagename, setImagename] = useState('default')
const [imageurl, setimageurl] = useState('')
const [issues, setIssues] = useState('')
const [adopter, setAdopter] = useState('')


// name (*), cat/dog (need to know which DB to send to), age (number and units), location, notes
// updating to work with created DB and backend means adding
// vetting (*) - char drop down
// imagename (*) - string
// imageurl - string - check formatting?
// bonded - char drop down
// foster (*) - foster - default NONE
// location - String
// chip (*) - char drop down
// spayneuter (*) - string dropdown
// issues - string (larger)
// other - string (larger)
// adoptionstatus (*) - string dropdown
// adopter - string

//required fields are: name, vetting (N), imagename, foster (N), chip (N), spayneuter (unknown), adoptionsatus (NONE)

const handleAdd = e => {
    e.preventDefault()
    console.log('in handleAdd')
    console.log(animalToUpdate)
    addAnimal(animalToUpdate)
}

const addAnimal = async (newAnimal) => {
    // header1 = {'Access-Control-Allow-Origin': '*'}
    // config = {headers: header1}
    console.log('in try ', `http://localhost:8080/api/v1/${petType}/add${petType}`, newAnimal, {
        headers: {
            // "Content-Type": "application/json",
            // "Cookie": this.sessionid,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
        }
    })
    try {
        const response = await axios.post(`http://localhost:8080/api/v1/${petType}/add${petType}`, newAnimal, {headers: {"Access-Control-Allow-Origin": "*"}} )
        fetchAnimals()
    } catch(err) {
        console.log(err)
    }
}

const fetchAnimals = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/${petType}/all${petType}`)

        console.log(response)
        setAvailableCats(response.data)
    } catch (err) {
        console.log(err)
    }
}

const handleSubmit = e => {
    let newAnimal = {}
    e.preventDefault()
    // console.log('in handlesubmit');
    // console.log(e.target)
    // console.log(e.target.animalName.value)
    // console.log(petType)
    // console.log(e.target.ageNum.value + ' ' + ageUnit)
    // console.log(ageUnit)
    // console.log(e.target.animalLocation.value)
    // console.log(e.target.notes.value)

    if (e.target.animalName.value.trim() !== '') {
        newAnimal.name = e.target.animalName.value
    } else {
        newAnimal.name = "name is missing"
    }
    if (e.target.foster.value.trim() !== '') {
        setFoster(e.target.foster.value)
    }
    else {
        setFoster("NONE")
    }

 //   newAnimal.petType = petType
    newAnimal.age = e.target.ageNum.value + ' ' + ageUnit
    newAnimal.location = e.target.location.value
    newAnimal.other = e.target.other.value
    newAnimal.vetting = vetting
    newAnimal.bonded = bonded
    newAnimal.chip = chip
    newAnimal.foster = foster
    newAnimal.spayneuter = spayneuter
    newAnimal.adoptionstatus = adoptionstatus
    newAnimal.adopter = adopter
    newAnimal.imagename = imagename
    newAnimal.imageurl = imageurl
    newAnimal.issues = issues
    console.log(newAnimal)

// updating to work with created DB and backend means adding

// other - string (larger)
// adopter - string

 //   setCatList([...catList, newAnimal])

    setAnimalToUpdate(newAnimal)
    setNewDisplay(JSON.stringify(newAnimal))
 //   const catListJSON = JSON.stringify(catList);
 //   console.log(catListJSON)

  //  localStorage.setItem("catList", catListJSON)

}

const handleTypeSelect = e => {
    console.log(e.target.value);
    setPetType(e.target.value)

}

const handleVettingSelect = e => {
    console.log(e.target.value);
    setVetting(e.target.value)

}

const handleChipSelect = e => {
    console.log(e.target.value);
    setChip(e.target.value)

}

const handleBondedSelect = e => {
    console.log(e.target.value);
    setBonded(e.target.value)

}

const handleNeuterSelect = e => {
    console.log(e.target.value);
    setSpayneuter(e.target.value)

}

const handleAdoptionStatusSelect = e => {
    console.log(e.target.value);
    setAdoptionstatus(e.target.value)

}

const handleAgeSelect = e => {
    console.log(e.target.value);
    setAgeUnit(e.target.value)

}

// console.log(catList)

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                            <option value="">  </option>
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
        </div>
    );
}

export default InputForm;