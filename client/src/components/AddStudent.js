import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";

const AddStudent=()=>{
    const history = useNavigate();
    const [user,setUser] = useState({
        name: "", enrollment:"", branch: "", semester: ""
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

        const {name ,enrollment , branch , semester} = user;
        
        const res = await fetch('/AddStudent' , {
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name ,enrollment , branch , semester
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
    
        }

    return ( <>
           <div id="fffman">
      <h1>Student Registration</h1>
      <form>
        <div id="ffirst">
          <i id="vpm" className="fa-solid fa-user"></i>
          <input type="text" id="fusername" name='name' value={user.name} onChange={handleInputs} placeholder="Student Name" />
        </div>
        <div id="fthird">
          <i id="vpm" className="fa-solid fa-id-card-clip"></i>
          <input type="text" id="femid" name='enrollment' value={user.enrollment} onChange={handleInputs} placeholder="Enrollment number" />
        </div>
        <div id="fsecond">
          <i id="vpm" className="fa-solid fa-building-user"></i>
          <input type="text" id="femail" name='branch' value={user.branch} onChange={handleInputs} placeholder="Branch" />
        </div>
        <div id="ffive">
          <i id="vpm" className="fa-solid fa-star"></i>
          <input type="text" id="fcpassword" name='semester' value={user.semester} onChange={handleInputs} placeholder="Semester" />
        </div>
        <button id="fnn" type="submit" onClick={PostData}>
          SUBMIT
        </button>
      </form>
    </div>
    
    </>
    )
}
export default AddStudent;