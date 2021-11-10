import React, {useContext, useEffect} from 'react'

import WeatherForm from '../../Components/Home/Form/WeatherForm';
import Loader from '../../Components/Custome/Loader/Loader';
import CityInformation from '../../Components/Home/CityInformation/CityInformation';
import CityContext from '../../Context/CityContext';
import Error from '../Error/Error';

const Home = () => {

    const {
        cityInformation, setCityInformation,
        error,
        loader
    } = useContext(CityContext);

        useEffect(() => {
            setCityInformation(null)
        }, [setCityInformation])

    console.log(error)

    return (
        <div>
            <WeatherForm/>

            {loader && <Loader />}

            {cityInformation && !error && (<CityInformation />)}

            {error && <Error />}

        </div>
    )
}

export default Home
