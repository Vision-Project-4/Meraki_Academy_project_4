import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
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
      <section className="bg-white p-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
              <h3 className="ml-4">Booking information</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  User ID: {userBooking.user.id_number}
                </li>
                <li className="list-group-item">
                  Name: {userBooking.user.name}
                </li>

                <li className="list-group-item">
                  Vaccine Name: {userBooking.vaccineName}
                </li>
                <li className="list-group-item">
                  Date: {moment(userBooking.date).format("DD-MM-YYYY")}
                </li>
                <li className="list-group-item">Time: {userBooking.time}</li>
                <li className="list-group-item">
                  Email: {userBooking.user.email}
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src="https://i.pinimg.com/564x/cc/28/8b/cc288bc990ca056d2d80981912ec5259.jpg" style={{width:"80%"}}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MyBooking;
