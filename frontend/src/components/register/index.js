import { React, useState } from "react";
import axios from "axios";

export default function index() {
  const [idNumber, setIdNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [t, setTrue] = useState(false);
  const [x, setX] = useState(false);

  const Register = () => {
    axios
      .post("http://localhost:5000/user", {
        idNumber,
        firstName,
        lastName,
        nationality,
        age,
        email,
        password,
      })
      .then((res) => {
        if (!res.data.errors) {
          setTrue(true);
          setX(false);
        } else {
          setTrue(false);
          setX(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Register">
      <input
        type="number"
        placeholder="ID number here"
        onChange={(e) => {
          setIdNumber(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="First Name here"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Last Name here"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="nationality here"
        onChange={(e) => {
          setNationality(e.target.value);
        }}
      />

      <input
        type="number"
        placeholder="age here"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <input
        type="email"
        placeholder="email here"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="password here"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={Register}>Register</button>
      {t ? (
        <div className="massageSuccessful">
          The user has been created successfully
        </div>
      ) : null}
      {x ? (
        <div className="massageError">
          Error happened while creating a new article, please try again
        </div>
      ) : null}
    </div>
  );
}
