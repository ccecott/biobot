import React, { useState } from 'react';
import Axios from 'axios'
import Calendar from './Calendar'


function Data() {

    const [info, setInfo] = useState("");

    // API call
const getData = (calendarDate) => {
    Axios.get('https://api.covidtracking.com/v1/us/daily.json').then((res) => {
        console.log(res);
       
        setInfo(res.data[0].dateChecked)
    })
}


// Date render on page from Calendar 
  


    return (
        <div>
            {/* <h2>Data here</h2> */}
            <button onClick={getData}>Get Data</button>
            {/* this.props can take the data input */}
            {/* this allows me to view the date from the array */}
            {info}
        </div>
    )
}

export default Data;