import React, { useEffect, useState } from 'react';
import attendanceimg from './attendance.png';
import foodimg from './food.jpg'

function StudentAttendance() {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const Resets = () => {
    if (window.confirm("Are you sure?")) {
      setDate(""); // Reset to an empty string or initial state
      setDay("");  // Optionally reset the day as well
    }
  };

  useEffect(() => {
    const data = new Date();
    const format = `${data.getDate()+1}/${data.getMonth() + 1}/${data.getFullYear()}`;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day_format = daysOfWeek[data.getDay()+1]; // Correctly access the current day
    setDate(format);
    setDay(day_format);
  }, []);

  return (
    <div className='structure mt-5'>
      <div className='row'>
        <div className='col-6'>
          <img
            src={foodimg}
            alt="Attendance logo"
            style={{ height: '90%', width: '80%' ,borderRadius : '30px'}}
          />
        </div>
        <div className='col-6'>
          <div className='attendance'>
            <h3>Date: {date}</h3>
            <h3>Day: {day}</h3>
            <h3>Attendance is <i>COUNT</i></h3>
            <button onClick={Resets} className='reset-btn'>Reset</button>
          </div>
        </div>
        <div className='foot'>
        </div>
      </div>
    </div>
  );
}

export default StudentAttendance;
