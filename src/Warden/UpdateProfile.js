import React from "react";
import './App.css';
import { useState } from "react";

function UpdateProfile(){
    const [password,setPassword]=useState("");
    const [cpassword,setCpassword]=useState("");
    const Change = (e) =>{
        if (password === cpassword){
            alert("Password matched");
        }
        else{
            e.preventDefault();
            alert("Password Missmatched")
        }
    }
        return(
        <div className="background">
            <div className="card-update">
            <h3 style={{marginLeft:"20px",marginTop:"20px"}}>Update Profile  <span style={{color:'red',fontSize:'13px'}}>Note only passowrd can change *</span></h3>
               <form>
                <input type="text" className="text-update" placeholder="Enter your new password...." onChange={(e)=>setPassword(e.target.value)}  required/>
                <input type="password" className="text-update" placeholder="Confirm your Password...." onChange={(e)=>setCpassword(e.target.value)} requireds/><br></br>
                <button className="btn-update" onClick={Change}>Submit</button>
               </form>

            </div>

        </div>

    )
}
export default UpdateProfile;


