import React, {useState, useEffect} from 'react';
import FindCoutries from "./components/FindCountries"
import axios from "axios"
import Countries from './components/Countries';


const App = () => {
    const [ countries, setCountries ] = useState([])
    const [ input, setInput ] = useState("")
    const [ show, setShow ] = useState(false)

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(response => { 
            setCountries(response.data)
            setShow(false)
        })
    }, [])

    const handlerInput = (event) => {
        setInput(event.target.value) 
        setShow(true)
        }

    const filterCountries=(countries.filter(country=>
        country.name.toLowerCase().indexOf(input.toLowerCase()) !== -1))

    return(
      <div>
          <div>
                <FindCoutries 
                    input={input} 
                    handlerInput={handlerInput}/> 
          </div>
          <div> 
                {show ? 
                    <Countries
                        countries={filterCountries}
                    /> 
                :null}
          </div>
      </div>
    )
}

export default App;
