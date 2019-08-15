import React from "react"

const FindCountries = (props) => {
    return (
        <div>
            find countries: <input 
              value={props.input} 
              onChange={props.handlerInput} />
        </div>
    )
}

export default FindCountries