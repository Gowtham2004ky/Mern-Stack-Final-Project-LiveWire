import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Kickstart your journey by creating a free account. 
                Whether you're a job seeker or an employer, sign up 
                to unlock personalized features and smart recommendations.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Looking for the perfect role or the right talent? Explore 
                thousands of verified job listings or post opportunities to 
                connect with skilled professionals.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Apply to jobs that match your skills with one click or easily 
                manage applications from top candidates. We simplify your hiring 
                and job-hunting process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
