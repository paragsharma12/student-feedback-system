import React from 'react'
import { Link } from 'react-router-dom';

const Admin =() =>{
  return (
    <>
    <div id="addContainer">
      <button id="addfaculty" type="button">
          <Link to="/AddFaculty">Add Faculty Details</Link>
      </button>
      <button id="addstudent" type="button">
          <Link to="/AddStudent">Add Student Details</Link>
      </button>
    </div>
    </>
  )
}
export default Admin

