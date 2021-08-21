import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <section className="bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="contact-info">
                  <h6>Contact us</h6>
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <span>Street, Bulding 555, 7th Floor</span>
                      <br />
                      <span>Amman,Jordan</span>
                    </li>
                    <br />
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <span>+962 (6)4444444</span> <br />
                      <span>+962 (79)1111111</span>
                    </li>
                    <br />
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span>info@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="container">
                  <h6>Follow us</h6>
                  <ul>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
