// src/components/Fauth.js
import React from 'react';
import BarGraph from './BarGraph';

function Fauth() {
  // Example data for the graph
  const countData = [10, 20, 15, 30,63,96,58]; // Sample food count data

  return (
    <>
      <div className='fnav'>
        <center>
          <h3 style={{ marginTop: '1%', color: 'white' }}>WELCOME KITCHEN DEPARTMENT</h3>
        </center>
      </div>
      <center>
      <h3 style={{marginTop:'5%'}}>Tomorrow's Count is <i>COUNT</i></h3>

      </center>
      <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
        <BarGraph data={countData} />
      </div>
      <div>
        <center>
          <button type='submit' className='btn-update' style={{marginRight:'50%',marginTop:'2%'}}>Logout</button>
        </center>
      </div>
      <div className='foot'>
        <p>Welcome to our hostel management website, designed to make managing hostels easier and more efficient.</p>
      </div>
    </>
  );
}

export default Fauth;
