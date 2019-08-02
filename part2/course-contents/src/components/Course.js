import React from "react";
import Header from "./Header";
import Part from "./Part"
import Total from "./Total"

const Course = (props) => {
    const {course} = props
    
    const content = () => course.parts.map(part => 
        <Part
            key={part.id}
            name={part.name}
            exercises={part.exercises}
        />
        )

    const total = () => course.parts.reduce((a,b) => a+b.exercises,0)

    return (
        <div>
            <Header header={course.name} />
            <ul>
                <ul>
                    {content()}
                </ul>
            </ul>
            <Total total={total()} />
        </div>
    )
}

export default Course