import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";

const AddFaculty=()=>{
    const history = useNavigate();
    const [user,setUser] = useState({
        name: "", email: "", employeeId:"", department: "", password: ""
    });

    let name ,value;
    const handleInputs =(e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async(e) =>{
        e.preventDefault();

        const {name ,email , employeeId , department , password} = user;
        
        const res = await fetch('/AddFaculty' , {
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name ,email , employeeId , department , password
            })
    
          });
          const data=res.json();
    
          if(res.status === 422 || !data){
            window.alert("Invalid information");
          }
          else{
            window.alert("Registration Successfull");
            history("/AddDetails");
          }

        //   function ValidateEmail (femail)
        //   {
        //         var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //         if(femail.value.match(mailformat))
        //         {
        //         return true;
        //         }
        //         else
        //         {
        //         alert("You have entered an invalid email address!");
        //         femail.focus();
        //         return false;
        //       } 
    
        // }
      }

    return ( <>
        <div id="fffman">
      <h1>Faculty Registration</h1>
      <form method='POST'>
        <div id="ffirst">
          <i id="vpm" className="fa-solid fa-user"></i>
          <input type="text" id="fusername" name='name' value={user.name} onChange={handleInputs} placeholder="Username" />
        </div>
        <div id="fsecond">
          <i id="vpm" className="fa-solid fa-envelope"></i>
          <input type="email" id="femail" name='email' value={user.email} onChange={handleInputs} placeholder="Email" />
        </div>
        <div id="fthird">
          <i id="vpm" className="fa-solid fa-id-card-clip"></i>
          <input type="text" id="femid" name='employeeId' value={user.employeeId} onChange={handleInputs} placeholder="Employee id" />
        </div>
        <div id="ffive">
          <i id="vpm" className="fa-solid fa-building-user"></i>
          <input type="text" id="fcpassword" name='department' value={user.department} onChange={handleInputs} placeholder="Department" />
        </div>
        <div id="ffourth">
          <i id="vpm" className="fa-solid fa-lock"></i>
          <input type="password" id="fpassword" name='password' value={user.password} onChange={handleInputs} placeholder="Password" />
        </div>
        <button id="fnn" type="submit" onClick={PostData}>
          SUBMIT
        </button>
      </form>
    </div>
    
    </>
    )
}
export default AddFaculty;