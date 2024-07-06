import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";

const FeedBack=()=>{
    const history = useNavigate();
    const [user,setUser] = useState({
        Fname: "" ,semester: "", name:"", enrollment: "", branch: "",DESCIPLINE:"",COMMUNICATION:"",PUNCTUALITY:"",LEADERSHIP:"",EDUCATIONAL_PROGRESS:""
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

        const {Fname,semester ,name , enrollment , branch, DESCIPLINE, COMMUNICATION, PUNCTUALITY, LEADERSHIP, EDUCATIONAL_PROGRESS} = user;

        
        const res = await fetch('/FeedBack' , {
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                Fname,semester ,name , enrollment , branch, DESCIPLINE ,COMMUNICATION ,PUNCTUALITY ,LEADERSHIP ,EDUCATIONAL_PROGRESS
            })
    
          });
          const data=res.json();
    
          if(res.status === 422 || !data){
            window.alert("Invalid information");
          }
          else{
            window.alert("Feedback Successfull Registered");
            history("/Addloginde");
          }
    
        }

  return (
    <div id="lform-container">
      <h1>Student Information & Feedback Form</h1>
      <form>
        <label className="pol" htmlFor="Fname">
          Faculty Name:
        </label>
        <input className="mol" type="string" id="Fname"  name="Fname"  value={user.Fname} onChange={handleInputs} required />

        <label className="pol" htmlFor="semester">
          semester:
        </label>
        <input className="mol" type="number" id="semester"  name="semester"  value={user.semester} onChange={handleInputs} required />

        <label className="pol" htmlFor="name">
          Name:
        </label>
        <input className="mol" type="text" id="name" name="name" value={user.name} onChange={handleInputs}  required />

        <label className="pol" htmlFor="studentId">
          Student ID:
        </label>
        <input className="mol" type="text" id="enrollment" name="enrollment" value={user.enrollment} onChange={handleInputs}  required />

        <label className="pol" htmlFor="branch">
          Branch:
        </label>
        <input className="mol" type="text" id="branch" name="branch" value={user.branch} onChange={handleInputs} required />

        <p className="let">DESCIPLINE:</p>
        <div>
        <input type="radio" name="DESCIPLINE" id="dWorst"  value="Worst" onChange={handleInputs} />
          <label htmlFor="dWorst">Worst</label>
          <input type="radio" name="DESCIPLINE" id="dSatisfactory" value="Satisfactory" onChange={handleInputs} />
          <label htmlFor="dSatisfactory">Satisfactory</label>
          <input type="radio" name="DESCIPLINE" id="dGood" value="Good" onChange={handleInputs} />
          <label htmlFor="dGood">Good</label>
          <input type="radio" name="DESCIPLINE" id="dVery Good" value="Very Good" onChange={handleInputs} />
          <label htmlFor="dVery Good">Very Good</label>
          <input type="radio" name="DESCIPLINE" id="dExellent" value="Exellent" onChange={handleInputs} />
          <label htmlFor="dExellent">Exellent</label>
          
        </div>
        <p className="let">COMMUNICATION:</p>
        <div>
        <input type="radio" name="COMMUNICATION" id="cWorst"  value="Worst" onChange={handleInputs} />
        <label htmlFor="cWorst">Worst</label>
        <input type="radio" name="COMMUNICATION" id="cSatisfactory" value="Satisfactory" onChange={handleInputs} />
          <label htmlFor="cSatisfactory">Satisfactory</label>
          <input type="radio" name="COMMUNICATION" id="cGood" value="Good" onChange={handleInputs} />
          <label htmlFor="cGood">Good</label>
          <input type="radio" name="COMMUNICATION" id="cVery Good" value="Very Good" onChange={handleInputs} />
          <label htmlFor="cVery Good">Very Good</label>
          <input type="radio" name="COMMUNICATION" id="cExellent" value="Exellent" onChange={handleInputs} />
          <label htmlFor="cExellent">Exellent</label>
         
        </div>
        <p className="let">PUNCTUALITY:</p>
        <div>
        <input type="radio" name="PUNCTUALITY" id="pWorst"  value="Worst" onChange={handleInputs} />
        <label htmlFor="pWorst">Worst</label>
        <input type="radio" name="PUNCTUALITY" id="pSatisfactory" value="Satisfactory" onChange={handleInputs} />
          <label htmlFor="pSatisfactory">Satisfactory</label>
          <input type="radio" name="PUNCTUALITY" id="pGood" value="Good" onChange={handleInputs} />
          <label htmlFor="pGood">Good</label>
          <input type="radio" name="PUNCTUALITY" id="pVery Good" value="Very Good" onChange={handleInputs} />
          <label htmlFor="pVery Good">Very Good</label>
          <input type="radio" name="PUNCTUALITY" id="pExellent" value="Exellent" onChange={handleInputs} />
          <label htmlFor="pExellent">Exellent</label>
        
        </div>
        <p className="let">LEADERSHIP:</p>
        <div>
        <input type="radio" name="LEADERSHIP" id="lWorst"  value="Worst" onChange={handleInputs} />
        <label htmlFor="lWorst">Worst</label>
        <input type="radio" name="LEADERSHIP" id="lSatisfactory" value="Satisfactory" onChange={handleInputs} />
          <label htmlFor="lSatisfactory">Satisfactory</label>
          <input type="radio" name="LEADERSHIP" id="lGood" value="Good" onChange={handleInputs} />
          <label htmlFor="lGood">Good</label>
          <input type="radio" name="LEADERSHIP" id="lVery Good" value="Very Good" onChange={handleInputs} />
          <label htmlFor="lVery Good">Very Good</label>
          <input type="radio" name="LEADERSHIP" id="lExellent" value="Exellent" onChange={handleInputs} />
          <label htmlFor="lExellent">Exellent</label>
         
        </div>
        <p className="let">EDUCATIONAL_PROGRESS:</p>
        <div>
        <input type="radio" name="EDUCATIONAL_PROGRESS" id="eWorst"  value="Worst" onChange={handleInputs} />
        <label htmlFor="eWorst">Worst</label>
        <input type="radio" name="EDUCATIONAL_PROGRESS" id="eSatisfactory" value="Satisfactory" onChange={handleInputs} />
          <label htmlFor="eSatisfactory">Satisfactory</label>
          <input type="radio" name="EDUCATIONAL_PROGRESS" id="eGood" value="Good" onChange={handleInputs} />
          <label htmlFor="eGood">Good</label>
          <input type="radio" name="EDUCATIONAL_PROGRESS" id="eVery Good" value="Very Good" onChange={handleInputs} />
          <label htmlFor="eVery Good">Very Good</label>
          <input type="radio" name="EDUCATIONAL_PROGRESS" id="eExellent" value="Exellent" onChange={handleInputs} />
          <label htmlFor="eExellent">Exellent</label>
         
        </div>
        <button className="lbut" type="submit" onClick={PostData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedBack;
