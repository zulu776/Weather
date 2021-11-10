import React from 'react'

//AntD
import { Card } from 'antd';

const Error = () => {
    return (
    <div className="flex justify-center items-center h-96">
        <Card title={<p className="animate-pulse text-center text-4xl font-extrabold text-light_orange">ERROR 404</p>}  className="w-7/12 h-4/6 flex flex-col justify-center items-center">
            <p className="animate-pulse text-center text-4xl font-extrabold text-light_orange">CITY NOT FOUND</p>
            <p className="animate-pulse text-center text-4xl font-extrabold text-light_orange">TRY AGAIN</p>
        </Card>
    </div>
    )
}

export default Error
