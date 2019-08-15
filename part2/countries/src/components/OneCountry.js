import React, {useState, useEffect} from "react";
import axios from "axios"
import Language from "./Language"

const OneCountry = (props) => {
    const [ weather, setWeather ] = useState({})
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        axios
        .get(`http://api.apixu.com/v1/current.json?key=c8a7f2fccb9f4a2791f205225190608&q=${props.country.capital}`)
        .then(response => {
            setWeather(response.data)
            setLoaded(true)
        })
    }, [props.country.capital])

    return(
        <div>
            {loaded ?
                <div>
                    <h1>{props.country.name}</h1>
                    <span>capital {props.country.capital}</span><br />
                    <span>population {props.country.population}</span>
                    <h3>languages</h3> 
                        <ul>
                            {props.country.languages && props.country.languages.map((language,index) =>
                                <Language 
                                    key={index}
                                    language={language}
                                />
                            )}
                        </ul>
                    <br />
                    <img src={props.country.flag} alt="Flag" width="10%" />
                    <h2>Weather in {props.country.capital}</h2>
                        <strong>temparature: </strong>
                            <span>{weather.current.temp_c} Celsius</span><br />
                        <img src={weather.current.condition.icon} alt="Pic"/><br />
                        <strong>wind: </strong>
                            <span>{weather.current.wind_kph} kph </span>
                            <span>direction {weather.current.wind_dir}</span>
                </div>
            : null}
        </div>
    )
}

export default OneCountry