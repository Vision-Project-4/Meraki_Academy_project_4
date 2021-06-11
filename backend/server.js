const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const db = require("./db/db");
const userModel = require("./db/models/user");
const roleModel = require("./db/models/role")


//
const articlesRouter = require("./routers/routes/articles");
const userDataRouter = require("./routers/routes/userdata");
const commentRouter = require("./routers/routes/comments");

const loginRouter = require("./routers/routes/auth/login")
// const userRouter = require("./routers/routes/user");
const bookingRouter=require("./routers/routes/booking")



const userRouter = require("./routers/routes/user");


const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
// app.use('/users', usersRouter);

app.use("/articles", articlesRouter);
app.use("/userData", userDataRouter);
app.use("/login", loginRouter);
app.use("/articles/:id/comments", commentRouter);

// app.use("/user",userRouter)
app.use("/booking",bookingRouter)


app.use("/user",userRouter)


// app.use(authRouter);
// app.use(commentsRouter);
// app.use(roleRouter);

// Set templating engine
app.set("view engine", "ejs");

// Navigation
app.get("", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post(
  "/register",
  urlencodedParser,
  [
    
    check("id_number", "ID consist of 10 numbers")
      .exists()
      .isLength({ min: 10, max: 10 }),
    check("email", "Email is not valid").exists().isEmail().normalizeEmail(),
    check("password", "Please enter a strong Password")
      .exists()
      .isLength({ min: 8, max: 15 }),
  ],
  async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.json(alert);
    } else {
      const { nationality, id_number, name, age, email, password } = req.body;
      let {role} = req.body
      console.log(role)
        
      let role1;
      await roleModel.findOne({role}).then((res)=>{
        role1=res._id
        console.log(role1)
      }).catch((err)=>{
        console.log(err)
      })

       const user = new userModel({
        nationality,
        id_number,
        name,
        age,
        email,
        password,
        role:role1
        
      });
       user.save().then((result) => {
        res.json(result);
      });
        
      



      

    }
  }
);


app.post("/role", (req, res ) =>{
  const {role , permissions } = req.body

  const newRole = new roleModel({
    role,
    permissions 
  })

  newRole.save().then((result)=>{
    res.json(result)
  }).catch((err)=>{
    res.json(err)
  })

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
