
import 'antd/dist/antd.css'; 
import React, { useState } from "react";
// import { render } from "react-dom";
import { DatePicker, message } from "antd";
import "antd/dist/antd.css";
// import "./index.css";
// import Data from './Data'
// import Button from './Button'








const Calendar = () => {
    const [date, setDate] = useState(null);
    const handleChange = (value) => {
      message.info(
        `Selected Date: ${value ? value.format("MM/DD/YYYY") : "None"}`
      );
      
    //   console.log(value.format("MM/DD/YYYY"))
        // this is where I want to put in a loop to compair the date from the calendar to the API
      const date = setDate(value);

      
    };
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
          {/* <Data /> */}
        <DatePicker onChange={handleChange} style={{ }}/>
        {/* <Button /> */}
        {/* <button onClick={getData}>Get Data</button> */}
        <div style={{ padding: '20px'}}>
          Selected Date: {date ? date.format("MM/DD/YYYY") : "None"}
        </div>
      </div>
    );
  };
  
//   render(<Calendar />, document.getElementById("root"));
  



// function () {
//     return (
//         <div className='calendarContainer'>
//       <DatePicker />
//         </div>
//     )
// }


export default Calendar;