import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

//Context
import CityContext from '../../Context/CityContext'

//Antd
import { Card } from 'antd';

const WeatherInformation = () => {

    const {
        cityInformation,
        img
    } = useContext(CityContext);

    

    return (
        <div className="flex justify-center items-center mt-24 h-96">
            <div className="bg-light_gray w-4/6 h-full flex justify-center items-center">
                <Card title={cityInformation.name} extra={<img src={img} alt="error"/>} hoverable className="w-80">
                    <p>Weather Condition: {cityInformation.weather[0].description}</p>
                    <p>Atmospheric pressure: {cityInformation.main.pressure} hPa</p>
                    <p>Humidity: {cityInformation.main.humidity} %</p>
                    <p>Wind speed: {cityInformation.wind.speed} m/s</p>
                    <Link to="/">
                        <button>
                            Return
                        </button>
                    </Link>
                </Card>
            </div>
        </div>
    )
}

export default WeatherInformation
