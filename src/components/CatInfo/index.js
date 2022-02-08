import React, { createContext, useState } from 'react';

const CatInfo = () => {
    let savedCatList = localStorage.getItem('catList')
    const [newList, setNewList] = useState([])

    const handleClick = e => {
        e.preventDefault()

        console.log('in show cats')
        if (savedCatList ) {
            console.log('in if savedcatlist')
            console.log(savedCatList)
            let tempList = JSON.parse(savedCatList)
            
            if (tempList.length > 0 && newList.length > 0) {setNewList([])}
            tempList.forEach(cat => setNewList(newList => [...newList, cat]))
            
            // setNewList(newList => [...newList, tempList])
            console.log('(1) temp list is: ', tempList)
            // setNewList(JSON.parse(savedCatList))
            // console.log(tempList)
            // console.log(Object.keys(tempList))
            // console.log(Object.keys(tempList).length)

            // console.log(tempList[0])
            // for(let i = 0; i < (Object.keys(tempList).length); i++) {
            //     console.log(tempList[i])
            //     setNewList([...tempList[i], newList])
            // }
            // tempList.forEach(animal => 
            // setNewList(...animal, newList)
            // )
            console.log('new list 1 is : ', newList)

            // newList.push(tempList)
            console.log('new list 2 is : ', newList)
            // setNewList([...tempList, newList])
            // setNewList(newList)
            console.log('newlist is', newList)
        }
    }

    return (
        <div>
            <button type="submit" class="btn btn-primary" onClick={handleClick}>Show cats</button>
            CAT INFO
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cat or Dog</th>
                        <th>Age</th>
                        <th>location</th>
                        <th>notes</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        newList &&
                        newList.map((cat) => {
                            <tr>
                                <td>{cat.name}</td>
                                <td>{cat.petType}</td>
                                <td>{cat.age}</td>
                                <td>{cat.location}</td>
                                <td>{cat.notes}</td>
                            </tr>

                        })
                    }
                </tbody> */}
            </table>
                {/* {newList[0].name} */}
                {newList && newList.map((cat) => 
                <h1>{cat.name}</h1>
                )}
        </div>
    );
}

export default CatInfo;
