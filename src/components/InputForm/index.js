import React, { useState} from 'react';


const InputForm = () => {
const [catList, setCatList] = useState([])
const [petType, setPetType] = useState('')
const [ageUnit, setAgeUnit] = useState('')


// name, cat/dog, age (number and units), location, notes

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

    newAnimal.name = e.target.animalName.value
    newAnimal.petType = petType
    newAnimal.age = e.target.ageNum.value + ' ' + ageUnit
    newAnimal.location = e.target.animalLocation.value
    newAnimal.notes = e.target.notes.value
    console.log(newAnimal)

    setCatList([...catList, newAnimal])

    const catListJSON = JSON.stringify(catList);
    console.log(catListJSON)
    localStorage.setItem("catList", catListJSON)

}

const handleTypeSelect = e => {
    console.log(e.target.value);
    setPetType(e.target.value)

}

const handleAgeSelect = e => {
    console.log(e.target.value);
    setAgeUnit(e.target.value)

}

console.log(catList)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 flex-cont">
                    <label htmlFor="animalName" class="form-label">Animal's Name</label>
                    <input type="text" class="form-control" name='animalName' />
                </div>
                <div className="mb-3 flex-cont">
                    <label htmlFor="animalType" class="form-label">
                        Choose cat or dog
                        <select value={petType} onChange={handleTypeSelect}>
                            <option value="">  </option>
                            <option value="cat">cat</option>
                            <option value="dog">dog</option>
                        </select>
                    </label>
                </div>
                <div className="mb-3 flex-cont">
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
                    <label htmlFor="animalLocation" class="form-label">Animal's Location</label>
                    <input type="text" class="form-control" name='animalLocation' />
                </div>
                <div className="mb-3">
                    <label htmlFor="notes" class="form-label">Notes</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='notes'></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>

            </form>
            
        </div>
    );
}

export default InputForm;