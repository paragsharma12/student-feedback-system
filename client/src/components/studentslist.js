import React, { useEffect, useState } from 'react';



const StudentsList = (userdata) => {
  // const callPage =async () =>{
  //   try{
  //     const res = await fetch('/Login',{
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       credentials: "include"
  //     });
  //     const data = await res.json();
  //     console.log(data);

  //     if(!res.status ===200){
  //       const error =new Error(res.error);
  //       throw error;
  //     }
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // useEffect(()=> {
  //   callPage();
  // },[]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/stuli", { method: "GET" })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData, userdata);
        setData(responseData.data);
      });
  }, [userdata]);

  return (
    <>
      <h2>Students Feedback Status</h2>

      <table method="GET">
        <thead>
          <tr>
            <th>Faculty name</th>
            <th>Semester</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
              <tr>
              <td>{item.Fname}</td>
              <td>{item.semester}</td>
              <td>{item.enrollment}</td>
              <td>{item.name}</td>
              <td>{item.branch}</td>
              <td>
              <tr>
            <th>DESCIPLINE</th>
            <th>COMMUNICATION</th>
            <th>PUNCTUALITY</th>
            <th>LEADERSHIP</th>
            <th>EDUCATIONAL_PROGRESS</th>
            
          </tr>
                <tr>
                <td>{item.DESCIPLINE}</td>
              <td>{item.COMMUNICATION}</td>
              <td>{item.PUNCTUALITY}</td>
              <td>{item.LEADERSHIP}</td>
              <td>{item.EDUCATIONAL_PROGRESS}</td>
                </tr>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentsList;
