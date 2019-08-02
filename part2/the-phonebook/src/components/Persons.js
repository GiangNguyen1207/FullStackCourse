import React from "react"
import Contact from "./Contact"

const Persons = (props) => {
    return (
        <ul>
            {props.persons.map(contact=>
                <Contact 
                    key={contact.id}
                    name={contact.name}
                    phoneNumber= {contact.phoneNumber}
                />
        )}
        </ul>
    )
}

export default Persons