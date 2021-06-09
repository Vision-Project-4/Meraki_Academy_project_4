import { React, useState } from "react";
import axios from "axios";

export default function Register() {
  const [nationality, setNationality] = useState("");
  const [id_number, setId_number] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(false);
  const [t, setTrue] = useState(false);
  const [x, setX] = useState(false);
  const [Jordanian, setJordanian] = useState(true);

  const createUser = () => {
    
    axios
      .post("http://localhost:5000/user", {
        nationality,
        id_number,
        name,
        age,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
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
        checked={Jordanian}
        type="radio"
        id="Jordanian"
        name="nationality"
        value="Jordanian"
        onChange={() => setJordanian(true)}
      />
      <label htmlFor="Jordanian">Jordanian</label>

      <input
        type="radio"
        id="Non-Jordanian"
        name="nationality"
        value="Non-Jordanian"
        onChange={() => setJordanian(false)}
      />
      <label htmlFor="Non-Jordanian">Non-Jordanian</label>

      {Jordanian ? (
        <>
          <div>
            <p>
              ID Number:
              <input
                type="text"
                onChange={(e) => {
                  setId_number(e.target.value);
                }}
              />
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="Non-Jordanian">passport</label>
            <input
              type="text"
              onChange={(e) => {
                setId_number(e.target.value);
              }}
            />
          </div>
        </>
      )}

      <div className="inputs">
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
        <label htmlFor="User">User</label>
        <input type="radio" id="Employee" name="role" value="Employee" />
        <label htmlFor="Employee">Employee</label> */}
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
