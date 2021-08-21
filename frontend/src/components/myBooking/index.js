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
      <div>
        <h3>{userBooking.user.name}</h3>
        <h3>{userBooking.user.email}</h3>
        <h3>{userBooking.user.id_number}</h3>
        <h3>{userBooking.date}</h3>
        <h3>{userBooking.vaccineName}</h3>
      </div>
    </>
  );
};
export default MyBooking;
