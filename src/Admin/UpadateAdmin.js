import React from "react";
import { useState } from "react";

export default function UpdateAdmin(){
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
            <h3 style={{marginLeft:"20px",marginTop:"20px"}}>Update Profile  <span style={{color:'red',fontSize:'13px'}}>&nbsp;Note only passowrd can change</span></h3>
               <form>
                <input type="text" className="form-control"
                    style={{width:'70%',margin:'auto',marginTop:'25px'}}
                    placeholder="Enter your new password...." 
                    onChange={(e)=>setPassword(e.target.value)}  required/>
                <input type="password" className="form-control"

                    style={{width:'70%',margin:'auto',marginTop:'25px'}}
                    placeholder="Confirm your Password...."
                    onChange={(e)=>setCpassword(e.target.value)} requireds/><br></br>
                <button className="btn-update" onClick={Change}>Submit</button>
               </form>

            </div>

        </div>

    )
}


