import './App.css';
import { Link } from 'react-router-dom';

function WardenMain() {
  return (
    <>
    <div id="controller">
        <div className='navbar' style={{ fontSize: '16px', fontFamily: 'Roboto' }}>
            <h3 style={{ color: "white", fontSize: '20px' }} className="nav-heading">Welcome</h3>
            <div className="nav-links">
                <Link to="/" className="nav-link" element={<WardenMain />}/>
                <Link to="/studentAttendance" className="nav-link">Attendance</Link>
                <Link to="/mealSelection" className="nav-link">Meal Selection</Link>
                <Link to="/updateprofile" className="nav-link">Update Profile</Link>
                <Link className="nav-link">Logout</Link>
            </div>
        </div>
    </div>


      <div className='foot'>
        <p>Welcome to our hostel management website, designed to make managing hostels easier and more efficient.</p>
      </div>
      </>
  );
}

export default WardenMain;
