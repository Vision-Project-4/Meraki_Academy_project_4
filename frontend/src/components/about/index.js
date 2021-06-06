import React from "react";
import { Route } from "react-router";
const About = () => {
  return (
    <>
      <div className="mainAbout">
        <div className="about1">
          <h4>Vision</h4>
          <p className="para">
            Health & Wellness is every body first choice for health care and
            health education.
          </p>
        </div>
        <div className="about2">
          <h4>Our services</h4>

          <p className="para">
            <ul>
              <li>
                focus on primary health care to improve access to quality
                essential services.
              </li>
              <li>
                work towards sustainable financing and healthy protection.
              </li>
              <li>train the health workforce and advise on labour policies.</li>
              <li>improve monitoring, data and information.</li>
            </ul>
          </p>
        </div>

        <div className="about3">
          <h4>Advantages of the health sector</h4>
          <p className="para">
          We have a health sector that looks to the interests of the individual.
          </p>
        </div>

        <div className="about4">
          <p>Copyright © 2021, Vision platform. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default About;
