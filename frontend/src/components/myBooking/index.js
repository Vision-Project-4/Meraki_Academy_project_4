import React, { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

const MyBooking = () => {
  const [userBooking, setUserBooking] = useState({ user: {} });
  const id = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking/user/${id}`)
      .then((result) => {
        console.log(result, "llllllllllllllllllllllllll");
        if (result.status == 200) {
          setUserBooking(result.data);
        }
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <div className="container m-auto">
        <div className="row">
          <div className="col-lg-6">
            <h3>Booking information</h3>
            <ul className="list-group">
              <li className="list-group-item">
                User ID: {userBooking.user.id_number}
              </li>
              <li className="list-group-item">Name: {userBooking.user.name}</li>

              <li className="list-group-item">
                Vaccine Name: {userBooking.vaccineName}
              </li>
              <li className="list-group-item">Date: {userBooking.date}</li>
              <li className="list-group-item">
                Email: {userBooking.user.email}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyBooking;
