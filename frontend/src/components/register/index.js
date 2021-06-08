import { React, useState } from "react";
import axios from "axios";

export default function Register() {
  const [nationality, setNationality] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(false);
  const [t, setTrue] = useState(false);
  const [x, setX] = useState(false);
  
  const createUser = () => {
    axios
      .post("http://localhost:5000/user", {
        nationality,
        idNumber,
        name,
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
      <input type="radio" id="Jordanian" name="nationality" value="Jordanian" />
      <label for="Jordanian">Jordanian</label>

      <br />
      <input
        type="radio"
        id="Non-Jordanian"
        name="nationality"
        value="Non-Jordanian"
      />
      <label for="Non-Jordanian">Non-Jordanian</label>


<div className="inputs">
      <p>
        ID Number /passport:
        <input
          type="number"
          onChange={(e) => {
            setIdNumber(e.target.value);
          }}
        />
      </p>

      <p>
        Name :
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </p>

      <p>
        Age :
        <input
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </p>

      <p>
        Email :
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </p>

      <p>
        Password :
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </p>
      </div>
      <p>
        {/* role :
        <input type="radio" id="User" name="role" value="User" />
        <label for="User">User</label>
        <input type="radio" id="Employee" name="role" value="Employee" />
        <label for="Employee">Employee</label> */}
      </p>
      <button onClick={createUser}>Register</button>
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
