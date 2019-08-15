import React from "react"
import Country from "./Country"
import OneCountry from "./OneCountry"

const Countries = (props) => {
    if(props.countries.length < 10) {
        return(
            <ul>
                {props.countries && props.countries.map(country =>
                    {if(props.countries.length > 1) {
                        return (
                            <Country  
                                key={country.numericCode}
                                country={country}/>
                        )
                    } else if(props.countries.length === 1) {
                        return (
                            <OneCountry
                                key={country.numericCode}
                                country={country}
                            />
                        )
                    } else return null
                    })}
            </ul>
        )
    } else if(props.countries.length > 10) {
        return <p>Too many matches</p>
    } else return null
}

export default Countries