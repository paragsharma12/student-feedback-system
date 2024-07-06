import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navebar from "./components/Navebar";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Login  from "./components/Login";
import AddDetails from "./components/AddDetails";
import AddFaculty from './components/AddFaculty';
import AddStudent from './components/AddStudent';
import FeedBack from './components/FeedBack';
import Studentslist from './components/studentslist';
import Addloginde from './components/Addloginde';
import Original from './components/Original';
import 'bootstrap/dist/css/bootstrap.css'
import "./Allcss/App.css";
const App=()=>{
    return (
      <>
      <Navebar/>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Login" element={<Login /> } />
        <Route path="/Admin" element={<Admin /> } />
        <Route path="/AddDetails" element={<AddDetails /> } />
        <Route path="/AddFaculty" element={<AddFaculty /> } />
        <Route path="/AddStudent" element={<AddStudent /> } />
        <Route path="/FeedBack" element={<FeedBack /> } />
        <Route path="/Studentslist" element={<Studentslist /> } />
        <Route path="/Addloginde" element={<Addloginde /> } />
        <Route path="/Original" element={<Original /> } />
      </Routes>
      </>      
    )
}
export default App