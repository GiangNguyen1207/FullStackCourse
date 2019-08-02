import React, { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', id: 1, number: '040-123456' },
        { name: 'Ada Lovelace', id: 2, number: '39-44-5323523' },
        { name: 'Dan Abramov', id: 3, number: '12-43-234345' },
        { name: 'Mary Poppendieck', id: 4, number: '39-23-6423122' }
        ])

    const [ newName, setNewName ] = useState('')
    const [ newPhoneNumber, setPhoneNumber ] = useState('')
    const [ filter, setFilter ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson={
            id:persons.length+1,
            name:newName,
            phoneNumber:newPhoneNumber,
    }
    persons.forEach(p=> {
        if(p.name.indexOf(newName) === -1) {
            setPersons(persons.concat(newPerson))
            setNewName('')
        } else {
            window.alert(`${newName} is already added to phonebook`)  
            setPersons(persons)   
        }
    })
    /*persons.forEach(e => {
        if(e.name === newName) {
            window.alert(`${newName} is already added to phonebook`)  
            setPersons(persons)      
        } else {
            setPersons(persons.concat(newPerson))
            setNewName('')
        }
    })*/
    }   

    const handleNameInput = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneNumberInput = (event) => {
        setPhoneNumber(event.target.value)
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
                phoneNumberValue={newPhoneNumber}
                handlePhoneNumberChange={handlePhoneNumberInput}
            />
    
        <h3>Numbers</h3>
            <Persons persons={filteredContacts}/>
    </div>
    )
}

export default App