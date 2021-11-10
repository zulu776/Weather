import React, { useContext } from 'react'
import CityContext from '../../../Context/CityContext'

const WeatherForm = () => {

    const {
        handleCity,
        handleSearchWeather,
    } = useContext(CityContext);

    return (
            <form 
            onSubmit={e =>handleSearchWeather(e)} 
            className=" flex justify-center">
                <input
                type="text"
                onChange={({target}) => handleCity(target)}
                placeholder="Name of a city"
                className="w-2/4 h-10 mt-24 bg-green rounded-md text-center"
                />
                <input type="submit" value="Search!"
                className="w-20 h-10 mt-24 hover:bg-dark_green hover:text-light_orange rounded-md border" />
            </form>
    )
}

export default WeatherForm
