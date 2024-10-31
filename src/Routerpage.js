import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import WardenMain from './Warden/WardenMain'; 
import StudentAttendance from './Warden/StudentAttendance'; 
import UpdateProfile from './Warden/UpdateProfile';
import MealSelection from './Warden/MealSelection';
import AdminMain from './Admin/AdminMain';
import AddStudent from './Admin/AddStudent';
import AddWarden from './Admin/AddWarden';
import UpdateAdmin from './Admin/UpadateAdmin';
import AdminDashboard from './Admin/AdminDashboard';
import { ToastContainer } from 'react-toastify';

function WardenLayout() {
  return (
    <div>
      <WardenMain />
      <Outlet /> 
    </div>
  );
}
function AdminLayout() {
  return (
    <div>
      <AdminMain />
      <Outlet /> 
    </div>
  );
}

function Routerpage() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/warden" element={<WardenLayout />}>
          <Route index element={<StudentAttendance />} />  
          <Route path="studentAttendance" element={<StudentAttendance />} />
          <Route path="updateprofile" element={<UpdateProfile />} />
          <Route path="mealSelection" element={<MealSelection />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard/>}/>
        <Route path="addStudent" element={<AddStudent/>}/>
        <Route path="addWarden" element={<AddWarden/>}/>
        <Route path="updateProfile" element={<UpdateAdmin />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default Routerpage;
