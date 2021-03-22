import React, { useState } from 'react';
import Axios from 'axios'

function Data() {

    const [info, setInfo] = useState("");

const getData = () => {
    Axios.get('https://api.covidtracking.com/v1/us/daily.json').then((res) => {
        console.log(res);
        setInfo(res.data[0].date)
    })
}

    return (
        <div>
            <h2>Data here</h2>
            <button onClick={getData}>Get Data</button>
            {info}
        </div>
    )
}

export default Data;