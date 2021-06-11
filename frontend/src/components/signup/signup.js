import React, { useState } from "react";

export default function signup() {
  return (
    <>
      <section>
        <div className="container">
          <div
            className="row"         
            style={{ justifyContent: "center", padding: "5%" }}
          >
            <form
              className="bg-white rounded form"
              style={{ padding: "5%", width: "450px" }}
            >
              <fieldset className="form-group row">
                <legend className="col-form-label col-sm-3 float-sm-left pt-0">
                  Nationality
                </legend>
                <div className="col-sm-9">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="jor"
                      checked
                    />
                    <label className="form-check-label" for="gridRadios1" >
                      Jordanian
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="non"
                    />
                    <label className="form-check-label" for="gridRadios2">
                      Non-Jordanian
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="form-group">
                <label for="id_number">
                  <i className="fas fa-asterisk"></i> id_Number/id_Passport
                </label>
                <input
                  type="text"
                  id="id_number"
                  className="id_number form-control"
                  placeholder="National ID"
                />
              </div>
              <div className="form-group">
                <label for="name">
                  <i className="fas fa-asterisk"></i> Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="name form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label for="age">
                  <i className="fas fa-asterisk"></i> Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="age form-control"
                  placeholder="Your Age"
                />
              </div>
              <div className="form-group">
                <label for="email">
                  {" "}
                  <i className="fas fa-asterisk"></i> Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="email form-control"
                  placeholder="Enter your Email"
                  onChange={(e) => {
                    // setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="password">
                  {" "}
                  <i className="fas fa-asterisk"></i> Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="password form-control"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    // setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="logged"
                  id="checkbox"
                />
                <label className="form-check-label" for="checkbox">
                  I Agree
                </label>
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={funLogin}
                style={{ margin: "auto", display: "block", width: "100%" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
