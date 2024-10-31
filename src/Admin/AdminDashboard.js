import React from 'react'
import { Link } from 'react-router-dom';
import './Admin.css';
export  const baseurl ='http://localhost:5000';


export default function AdminDashboard() {

    return (
        <>
            <div className='row'>
                <div className='col-md-8'>
                    <div style={{ marginTop: '10px', marginLeft: '15px' }}>
                        <h4>Admin Dashboard</h4>
                    </div>
                    <div className='box-container'>
                        <div className='box box-register'>
                            <div>
                                <p className='header-text'>Register new students</p>
                                <Link to="/admin/addStudent" className='link-text'>Add Student &gt; </Link>
                            </div>
                        </div>

                        <div className='box box-warden'>
                            <div>
                                <p className='header-text'>Enroll New Warden</p>
                                <Link to="/admin/addWarden" className='link-text'>Add Warden &gt; </Link>
                            </div>
                        </div>
                        <div className='box box-update'>
                            <div>
                                <p className='header-text'>Update your profile</p>
                                <Link to="/admin/updateProfile" className='link-text'>Update &gt; </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='profile-card'>
                        <h3 className='profile-title'>Admin Profile</h3>
                        <div className='admin-data'>
                            <h5 className='h-text'>Name:  </h5>
                            <h5 className='h-text'>Email: </h5>
                            <h6 style={{ fontSize: '12px', marginTop: '25px' }}> Note*: Admin can change only password in Update profile</h6>
                            <Link >Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}