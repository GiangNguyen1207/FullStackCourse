import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const Vote = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const Max = (props) => {
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{props.text} has {props.max} votes</p>
        </div>
        
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(new Array(6+1).join('0').split('').map(parseFloat));

    const random = newSelected => {
        setSelected(newSelected)
    }

    const copy = [...points]

    const vote = () => {
        copy[selected] += 1;
        setPoints(copy);
    }

    let max=Math.max(...copy)
    let index=copy.indexOf(max)

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}<br />
            <Vote
                text="vote"
                handleClick={()=>vote()}/>
            <Button 
                text="next anecdotes"
                handleClick={()=>random(Math.floor(Math.random()*6))}/>
            <Max 
                text={props.anecdotes[index]} 
                max ={max}/>
        </div>
    ) 
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
