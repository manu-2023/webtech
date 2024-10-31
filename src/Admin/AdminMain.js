import '../Warden/App.css'
import { Link } from 'react-router-dom';

export default function AdminMain() {
  return (
    <>
    {/* <div id="controller">
        <div className='navbar'>
            <h3 style={{ color: "white", fontSize: '30px',marginLeft:'50px' }} className="nav-heading">Welcome</h3>
            <div className="nav-links">
                {/* <Link to="/" className="nav-link" element={<WardenMain />}/> */}
                {/* <Link to="/admin/addStudent" className="nav-link">Add Student</Link>
                <Link to="/admin/addWarden" className="nav-link">Add Warden</Link>
                <Link to="/admin/updateProfile/admin" className="nav-link">Update Profile</Link>
                <Link className="nav-link">Logout</Link>
            </div>
        </div>
    </div> */} 


      <div className='foot'>
        <p>Welcome to our hostel management website, designed to make managing hostels easier and more efficient.</p>
      </div>
      </>
  );
}

