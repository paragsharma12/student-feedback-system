import React, { useEffect, useState } from 'react';

const Original = (userdata) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Original", { method: "GET" })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData, userdata);
        setData(responseData.data);
      });
  }, [userdata]);

// Sample query to check if data in collectionA has a corresponding document in collectionB
// const commonFieldValue = 'someValue'; // Replace with the actual value you're looking for

// const documentInCollectionA = await db.collection('collectionA').findOne({ commonField: commonFieldValue });

// if (documentInCollectionA) {
//   // If document is found in collectionA based on commonField
//   const documentInCollectionB = await db.collection('collectionB').findOne({ commonField: commonFieldValue });

//   if (documentInCollectionB) {
//     // If corresponding document is found in collectionB
//     console.log('Data in collectionA has a corresponding document in collectionB');
//     console.log('Data in collectionA:', documentInCollectionA);
//     console.log('Data in collectionB:', documentInCollectionB);
//   } else {
//     console.log('Corresponding document not found in collectionB');
//   }
// } else {
//   console.log('Document not found in collectionA based on commonField');
// }



  return (
    <>
      <h2>Students Feedback Status</h2>

      <table>
        <thead>
          <tr>
            <th>Semester</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Branch</th>
          
          </tr>
        </thead>
        <tbody>
          {  data.map((item) => (
              <tr>
              <td>{item.semester}</td>
              <td>{item.enrollment}</td>
              <td>{item.name}</td>
              <td>{item.branch}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Original;
