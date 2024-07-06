import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";
const Admin = () => {
    const history = useNavigate();
    const [email , setName] = useState('');
    const [password ,setPassword] = useState('');

    const loginUser = async(e) => {
      e.preventDefault();

      const res = await fetch('/Admin' , {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })

      });
      const data=res.json();

      if(res.status === 400 || !data){
        window.alert("Invalid information");
      }
      else{
        window.alert("Login Successfull");
        history("/AddDetails");
      }

    }
    return (   <>
    <div className='admin'>
        <div id="man">
            <h1 id="silly">Only Admin Log In</h1>
            <form method='POST'>
                <div id="first">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" id="username" value={email} onChange={(e) => setName(e.target.value)} placeholder="useremail" />
                </div>
                <div id="second">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
                <button id="nn" type="submit" onClick={loginUser}>SUBMIT</button>
            </form>
        </div>
        </div>
        </>
    );
}

export default Admin;