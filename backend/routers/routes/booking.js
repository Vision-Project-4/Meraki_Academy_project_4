const express = require("express");
const {
  create_new_booking,
  getAll_booking,
  delete_bookingById,
  git_bookingById,
  update_booking,
  getBookingByUser,
} = require("../controllers/booking");

const bookingRouter = express.Router();

bookingRouter.post("/", create_new_booking);
bookingRouter.get("/", getAll_booking);
bookingRouter.get("/:id", git_bookingById);
bookingRouter.put("/:id", update_booking);
bookingRouter.delete("/:id", delete_bookingById);
bookingRouter.get("/user/:id", getBookingByUser);

module.exports = bookingRouter;
