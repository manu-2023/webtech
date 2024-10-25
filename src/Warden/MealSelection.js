import './App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function MealSelection() {
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [morning, setMorning] = useState(['Idli', 'Dosa', 'Upma', 'Poori & Saagu', 'Bisi Bele Bath', 'Puliyogare', 'Lemon Rice']);
    const [afternoon, setAfternoon] = useState(['Rice & Sambar', 'Chapati', 'Fried Rice', 'Pulav', 'Biryani', 'Noodles', 'Curd Rice']);
    const [night, setNight] = useState(['Chapati', 'Rice & Rasam', 'Dosa', 'Khichdi', 'Paratha', 'Paneer Curry', 'Veg Biryani']);

    const [selectedMorning,setSelectedmorning]=useState('');
    const [selectedAfternoon, setSelectedAfternoon] = useState('');
    const [selectedNight, setSelectedNight] = useState('');

    const edit = (value)=>{
        setSelectedmorning(morning[value]);
        setSelectedAfternoon(afternoon[value]);
        setSelectedNight(night[value]);
        
    }
    return (
       <div style={{marginLeft:'20px'}}>
         <div className="mt-4">
            <div className="row">
                <div className="col-8">
                    <div className="table-menu">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Morning</th>
                                    <th>Afternoon</th>
                                    <th>Night</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {week.map((day, index) => (
                                    <tr key={index}>
                                        <td>{day}</td>
                                        <td>{morning[index]}</td>
                                        <td>{afternoon[index]}</td>
                                        <td>{night[index]}</td>
                                        <td><Link onClick={()=>{edit(index)}}>Edit</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-4">
                    <div className="meals-edit">
                        <h3 style={{marginLeft:'15px',padding:'10px'}}>Edit Meals</h3>
                        <input type="text" className='text-update' placeholder='Morning Breakfast' value={selectedMorning}/>
                        <input type="text" className='text-update' placeholder='AfterNoon Lunch' value={selectedAfternoon}/>
                        <input type="text" className='text-update'placeholder='Night Dinner' value={selectedNight}/>
                        <button className='btn-update' style={{marginTop:'20px'}}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default MealSelection;