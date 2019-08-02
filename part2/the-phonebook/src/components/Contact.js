import React from "react"

const Contact = (props) => {
    return (
    <li>
        {props.name} {props.phoneNumber}
    </li>
    )
}

export default Contact;