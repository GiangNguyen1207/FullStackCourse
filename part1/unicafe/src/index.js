import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={props.handleGood}>good</button>
            <button onClick={props.handleNeutral}>neutral</button>
            <button onClick={props.handleBad}>bad</button>
        </div>
    )
    
}

const Statistics = (props) => {
    let good=props.good, neutral=props.neutral, bad=props.bad
    return(
        (good !== 0 || neutral !== 0 || bad !== 0) ?
            <div>
                <table>
                    <tbody>
                        <Statistic text="good" value ={good} />
                        <Statistic text="neutral" value ={neutral} />
                        <Statistic text="bad" value ={bad} />
                        <Statistic text="all" value={good+neutral+bad}/>
                        <Statistic text="average" value={(good*1 + neutral*0 + bad*-1)/(good+neutral+bad)}/>
                        <Statistic text="positive" value={good/(good+neutral+bad)*100 + " %"}/>
                    </tbody>
                </table>
            </div>
        : <div>No feedback given</div>
    )
}

const Statistic = (props) =>  {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}
   

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <div>
            <Button 
                handleGood={()=>setGood(good+1)}
                handleNeutral={()=>setNeutral(neutral+1)}
                handleBad={()=>setBad(bad+1)} />
        </div>
        <div>
            <h1>Statistics</h1>
            <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad} /> 
        </div>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
