import './App.css';
import { Link } from 'react-router-dom';

function WardenMain() {
  return (
    <>
    <div id="controller">
        <div className='navbar'>
            <h3 style={{ color: "white", fontSize: '30px',marginLeft:'50px' }} className="nav-heading">Welcome</h3>
            <div className="nav-links">
                <Link to="/warden" className="nav-link" element={<WardenMain />}/>
                <Link to="/warden/studentAttendance" className="nav-link">Attendance</Link>
                <Link to="/warden/mealSelection" className="nav-link">Meals Table</Link>
                <Link to="/warden/updateprofile" className="nav-link">Update Profile</Link>
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
