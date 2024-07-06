import React from 'react';
import sohaa from "../images/Employee-review-software.png";
const Home = () => {
  return ( 
     <>
    <div className="row p-0">
      <div id="pp" className="col-md-6">
        <img src={sohaa} className="img-fluid nam" alt="..." />
      </div>
      <div id="kk" className="col-md-6 d-flex align-items-center p-0">
        <h1  id="homeh1">"Good Feedback Is The Key To Improvement "</h1 >
      </div>
    </div>
    <section>
      <div className="container-fluid row">
        <div className="col-12">
          <h3 id="her">HOW TO GIVE FEEDBACK TO STUDENT</h3>
          <ol id="list">
            <li id="log">You have to log in with a registered id and password</li>
            <li>Then you reach the student details page where you can check the feedback status of every student submitted or not submitted</li>
            <li>If feedback is done then okay, if not then fill the details in the given form then submit the feedback of the student</li>
            <li>At last check the feedback of the existing student</li>
          </ol>
        </div>
      </div>
    </section>
  
  </>
  );
};

export default Home;