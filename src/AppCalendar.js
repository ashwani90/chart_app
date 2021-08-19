import { useState, useEffect } from "react";
import { Chart } from "./components/chart";
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
    const [date, setDate] = useState(new Date(2021, 6, 1),
    new Date(2021, 6, 10),);
  return (
<div className='app'>
      <h1 className='text-center'>React Calendar with Range</h1>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          defaultValue={date}
          selectRange={true}
          maxDate={new Date()} // will not allow date later than today
  minDate={new Date(2015, 6, 1)}
//          defaultView='decade'
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;
