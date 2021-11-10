import React, {useContext, useEffect} from 'react'

import WeatherForm from '../../Components/Home/Form/WeatherForm';
import Loader from '../../Components/Custome/Loader/Loader';
import CityInformation from '../../Components/Home/CityInformation/CityInformation';
import CityContext from '../../Context/CityContext';

const Home = () => {

    const {
        cityInformation, setCityInformation,
        error,
        loader
    } = useContext(CityContext);

    useEffect(() => {
        setCityInformation(null)
    }, [setCityInformation])

    return (
        <div>
            <WeatherForm/>

            {loader && <Loader />}

            {cityInformation && !error && <CityInformation />}

        </div>
    )
}

export default Home
