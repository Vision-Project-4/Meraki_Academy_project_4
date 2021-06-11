import React from "react";
import { Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="container mt-5">
                <div className="row">
                  <ul>
                    <li>
                      <div className="container mb-2">
                        <i className="fas fa-award"></i>
                        <h4>Our Vision</h4>
                        <p>
                          Health & Wellness is every body first choice for
                          health care and health education.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="container mb-2">
                        <i className="fas fa-award"></i>
                        <h4>Our services</h4>
                        <ul id="list">
                          <li>
                            Focus on primary health care to improve access to
                            quality essential services.
                          </li>
                          <li>
                            Work towards sustainable financing and healthy
                            protection.
                          </li>
                          <li>
                            Train the health workforce and advise on labour
                            policies.
                          </li>
                          <li>Improve monitoring, data and information.</li>
                        </ul>
                      </div>
                    </li>
                  </ul>

                  <div className="container mt-5">
                    <Link to="/register">
                      <button type="button" className="btn btn-light btn-rounded">
                        Start Registration <i className="fas fa-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="container">
                <img src="https://i.pinimg.com/564x/dd/5f/5d/dd5f5db8966536ceb9fc20aa0a0b6038.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
