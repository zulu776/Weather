import React, { createContext, useState } from 'react'

const CityContext = createContext();

const CityProvider = ({children}) => {

    const [cityName, setCityName] = useState(null);
    const [cityInformation, setCityInformation] = useState(null);
    const [loader, setLoader] = useState(false);
    const [img, setImg] = useState(null);
    const [error, setError] = useState(false);

    const handleCity = ({ value }) => {
        setCityName(value);
    };

  

    const handleSearchWeather = async(e) => {
        e.preventDefault();
        setLoader(true);
        setError(false);
        setCityInformation(null);
        
        
        const API = 
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5c94bb29a39974f68dece341391a6153&units=metric`;
           
        const response = await fetch(API);
        const result = await response.json();
       
        setLoader(false);

        console.log(result.cod)

        if(result.cod === 200) {
            // setError(true);
            // setCityInformation(null);
            setError(false);
            setCityInformation(result);
            const URL= `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;

            setImg(URL);
        } else {
            // setError(false);
            // setCityInformation(result);
            setError(true);
            setCityInformation(null);
        }

    }

    const data = {
        cityName, setCityName,
        cityInformation, setCityInformation,
        loader,setLoader,
        error,setError,
        img,
        handleSearchWeather,handleCity
    }

    return (
        <CityContext.Provider value={data}>
            {children}
        </CityContext.Provider>
    )
}

export {CityProvider};
export default CityContext;
