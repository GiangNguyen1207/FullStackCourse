import React from "react";

const Note = (props) => {
    let {note} = props
    return (
        <li>
            {note.content}
        </li>
    )
}

export default Note;