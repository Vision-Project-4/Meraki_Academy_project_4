import React, { useState } from "react";
import axios from "axios";

export default function Register() {

  const [nationality, setNationality] = useState("Non Jordanian");

  const [id_number, setId_number] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(false);
  const [message , setMessage] = useState("")
  const [t, setTrue] = useState("");
  const [x, setX] = useState(false);
  const [Jordanian, setJordanian] = useState(false);
  const [role, setRole] = useState("User");
  // const [Non_Jordanian, setNon_Jordanian] = useState(true)

  const createUser = (e) => { 
    e.preventDefault()

    axios
      .post("http://localhost:5000/register", {
        nationality,
        id_number,
        name,
        age,
        email,
        password,
        role,
      })

      .then((res) => {
        console.log(res.data);

        if (res.data.length > 0) {
          setMessage(<div className="massageError">
          Error happened while creating a new article, please try again
        </div>)
          
        }else  {
          setMessage(
            <div className="massageSuccessful">
              The user has been created successfully
            </div>)

        }

      })
      .catch((err) => {
        console.log(err);
      });

  };



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
                      id="Jordanian"
                      name="nationality"
                      value="Jordanian"
                      onChange={() => {
                        setJordanian(true);
                        setNationality("Jordanian");
                      }}
                      checked={Jordanian}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Jordanian
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="Non_Jordanian"
                      name="nationality"
                      value="Non_Jordanian"
                      onChange={() => {
                        setJordanian(false);
                        setNationality("Non Jordanian");
                      }}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Non-Jordanian
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="form-group">
                <label htmlFor="id_number">
                  <i className="fas fa-asterisk"></i> id_Number/id_Passport
                </label>
                <input
                  type="text"
                  id="id_number"
                  className="id_number form-control"
                  placeholder="National ID"
                  onChange={(e) => {
                    setId_number(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-asterisk"></i> Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="name form-control"
                  placeholder="Your Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">
                  <i className="fas fa-asterisk"></i> Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="age form-control"
                  placeholder="Your Age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  {" "}
                  <i className="fas fa-asterisk"></i> Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="email form-control"
                  placeholder="Enter your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  {" "}
                  <i className="fas fa-asterisk"></i> Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="password form-control"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
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
                <label className="form-check-label" htmlFor="checkbox">
                  I Agree
                </label>
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={createUser}
                style={{ margin: "auto", display: "block", width: "100%" }}
              >
                Submit
              </button>
            {message}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
