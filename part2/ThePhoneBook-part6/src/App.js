import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import axios from "axios"

const App = () => {
    const [ persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNumber ] = useState('')
    const [ filter, setFilter ] = useState('')

    useEffect(()=> {
        axios.get('http://localhost:3001/persons')
        .then(response => {setPersons(response.data)})
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson={
            id:persons.length+1,
            name:newName,
            number: newNumber,
    }
    persons.forEach(p=> {
        if(p.name.indexOf(newName) === -1) {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNumber('')
        } else {
            window.alert(`${newName} is already added to phonebook`)  
            setPersons(persons)   
        }
    })
    } 

    const handleNameInput = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneNumberInput = (event) => {
        setNumber(event.target.value)
    }

    const handlerFilterInput = (event) => {
        setFilter(event.target.value) 
    }

    const filteredContacts = persons.filter(contact=>
        contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
  
    return (
    <div>
        <h2>Phonebook</h2>
            <Filter 
                value={filter}
                handleFilterChange={handlerFilterInput}
            />    
        <h3>add a new</h3>
            <PersonForm 
                submit={addPerson}
                nameValue={newName}
                handleNameChange={handleNameInput}
                phoneNumberValue={newNumber}
                handlePhoneNumberChange={handlePhoneNumberInput}
            />
    
        <h3>Numbers</h3>
            <Persons persons={filteredContacts}/>
    </div>
    )
}

export default App