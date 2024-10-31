// src/components/Fauth.js
import React from 'react';
import { Link } from 'react-router-dom';
import BarGraph from './BarGraph';

function Fauth() {
  // Example data for the graph
  const countData = [10, 20, 15, 30,63,96,58]; // Sample food count data

  return (
    <>
      <div className='fnav'>
        <center>
          <p style={{ marginTop: '1%', color: 'white',fontSize:'28px' }}>Welcome  Kitchen Department</p>
          <h3 style={{marginTop:'470px',color:'white',fontSize:'20px',cursor:'pointer'}} ><u>Logout</u></h3>
        </center>
      </div>
      <center>
      <h3 style={{marginTop:'5%'}}>Tomorrow's Attendance <i>COUNT</i></h3>

      </center>
      <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
        <BarGraph data={countData} /> 
      </div>
      <div>
        <center>
        </center>
      </div>
      <div className='foot'>
        <p>Welcome to our hostel management website, designed to make managing hostels easier and more efficient.</p>
      </div>
    </>
  );
}

export default Fauth;
