describe("Test if the Jest work", () => {
  test("should  output 2 ", () => {
    expect(1 * 2).toBe(2);
  });

  it("should be 1 = 1 ", () => {
    expect(1).toBe(1);
  });
});
const mongoose = require("mongoose");
const app = require("../server");
const request = require("supertest");

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect("mongodb://localhost:27017/testing", options);

const Roles = require("../db/models/role");

// const user = require("../db/models/user");
// const booking = require("../db/models/booking");
// beforeAll(async () => {
//   await user.remove();
// });
// afterEach(async () => {
//   await user.remove();
// });
// afterAll(async () => {
//   await user.remove();
//   await mongoose.connection.close();
// });

describe("Testing the module", () => {
  it("check if the model defined", () => {
    expect(Roles).toBeDefined();
  });
  it("Should save a User", async () => {
    const roleInfo = {
      role: "Noof",
      permissions: []
    };
    const user = new Roles(roleInfo);
    await user.save();

    const checkUser = await Roles.findOne({ role: "Noof"});
    expect(checkUser.firstName).toBe(roleInfo.firstName);
  });
});


// describe("Testing the module", () => {
  // it("check if the model defined", () => {
  //   expect(user).toBeDefined();
  // });
//   it("Should save a user", async () => {
//     const userInfo = {
//       nationality: "Yemen",
//       id_number: "1234567890",
//       name: "noof",
//       age: 24,
//       email: "a@a.com",
//       password: "12345678",
//       role: {_id}
//     };
//     const newUser = new user(userInfo);
//     await newUser.save();

//     const checkUser = await user.findOne({ nationality: "Yemen" });
//     expect(checkUser.nationality).toBe(userInfo.nationality);
//   });
// });
// describe("testing the module",()=>{
//   test("check if the model defined",()=>{
//     expect(booking).toBeDefined();
//   })
//   test("Should save a booking", async()=>{
//     const bookindData = {
//       vaccineName: "vaccineName",
//       name: {},
//       date: "date"
//     };
//     const newBooking = new booking(bookindData)
//     await newBooking.save();
//     const checkBooking = await user.findOne({ vaccineName: "vaccineName" });
//     expect(checkBooking.vaccineName).toBe(checkBooking.vaccineName);
//   })
// })
// describe("Testing User APIs", () => {
//   const user = {
//     firstName: "Ahmad",
//     lastName: "Hamad",
//     age: 24,
//     email: "a@a.com",
//     password: "a123",
//   };
//   it("shuold be able to creat a user", async () => {
//     const newuser = await await request(app).post("/users").send(user);
//     expect(typeof newuser.body).toEqual(typeof user);
//     expect(newuser.body).toHaveProperty("_id");
//     expect(newuser.statusCode).toBe(201);
//     expect(newuser.body.lastName).toBe(user.lastName);
//   });
// });


