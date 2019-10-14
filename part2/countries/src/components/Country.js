import React, {useState, useEffect} from "react";
import axios from "axios"
import Language from "./Language"

const Country = (props) => {
    const [ showDetails, setShowDetails ] = useState(false)
    const [ weather, setWeather ] = useState({})

    useEffect(() => {
        let isMounted = false
        axios
        .get(`http://api.weatherstack.com/current?access_key=335188ef8b3e043ba8a1669584216372&query=${props.country.capital}`)
        .then((response => {
            if(!isMounted) {
            setWeather(response.data)}
        }))
        return () => {isMounted=true}
    }, [props.country.capital])

    const buttonShow = () => {
        setShowDetails(!showDetails)
    }

    return(
        <div>
            <li>
                {props.country.name} 
                <button onClick={()=>buttonShow()}>Show</button>
            </li>
            {showDetails ? 
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
                        <span>{weather.current.temperature} Celsius</span><br />
                    <img src={weather.current.weather_icons} alt="Pic"/><br />
                    <strong>wind: </strong>
                        <span>{weather.current.wind_speed} kph </span>
                            <span>direction {weather.current.wind_dir}</span>
                </div>
                : null
            }
        </div>
       
    )
}

export default Country