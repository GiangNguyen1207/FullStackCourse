import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const course = 'Half Stack application development';
    const parts = [
        {part: "Fundamentals of React",
        exercises: 10}, 
        {part: "Using props to pass data", 
        exercises: 7}, 
        {part: "State of a component",
        exercises: 14}
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts}/>
        </div> 
    )
}

const Header = (props) => {
    return (
        <div>
            {props.course}
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <ul>
                {props.parts.map(a => 
                    <li>
                        {a.part + " " + a.exercises}
                    </li>)}
            </ul>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            Number of excerises: {props.parts.reduce((x, y) => x + y.exercises, 0)}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


