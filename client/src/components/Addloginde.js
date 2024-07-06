import React from 'react'
import { Link } from 'react-router-dom';

const Addloginde =() =>{
  return (
    <>
    <div id="addContainer">
      <button id="addfaculty" type="button">
          <Link to="/Studentslist">FEEDBACK STATUS</Link>
      </button>
      <button id="addstudent" type="button">
          <Link to="/FeedBack">GIVE FEEDBACK</Link>
      </button>
      <button id="addstudenti" type="button">
          <Link to="/Original">Student List</Link>
      </button>
    </div>
    </>
  )
}
export default Addloginde

