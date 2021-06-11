import React , {useState } from "react"
import { Route , Link } from 'react-router-dom';
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import moment from 'moment'

const Booking = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('10:00');



    let mDate = moment(date);
    let x = mDate.format("YYYY-MM-DD");
  //const time1 = '03:20'
    const dateTime = moment(x +" " + time, 'YYYY-MM-DDLT');
    //console.log(dateTime)
  //format you wanted
  const formatedDateTime = dateTime.format('YYYY-MM-DD-HH:mm')


//let x1 = {
    //'hour':    mTime.get('hour'),
  //  'minute':  mTime.get('minute'),
//}                

    return (<>
    
      <div>
        <Calendar
          
          onChange={setDate}
          value={date}
        />
      </div>
      {console.log(date)}


    <div>
      <TimePicker
        onChange={setTime}
        value={time}
      />
    </div>

    {console.log(formatedDateTime)}
    
      </>

    );
    }

    export default Booking