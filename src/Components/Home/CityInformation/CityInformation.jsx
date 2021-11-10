import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

//Context
import CityContext from "../../../Context/CityContext"

//AntD
import { Card } from 'antd';
import 'antd/dist/antd.css';


const CityInformation = () => {

    const {
        cityInformation
    } = useContext(CityContext)

    return (

        <div className="flex justify-center mt-20 h-56">
            <div className="w-4/6 h-full flex justify-center items-center bg-light_gray">
                <Card title={cityInformation.name} 
                    extra={
                        <Link to={`/weather/${cityInformation.name}`}>
                            <button>See More</button>
                        </Link>  
                    } 
                    hoverable
                    className="w-80"
                    >
                    <p>{cityInformation.name}</p>
                    <p>{cityInformation.main.temp} °C</p>
                </Card>
            </div>
        </div>
    )
}

export default CityInformation
