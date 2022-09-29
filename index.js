// // import from packages
const e = require("express");
const express = require("express");
const mongoose = require("mongoose");
const adminRoute = require("./routes/admin");

// import from other files

const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRoute = require("./routes/user");

// init
const app = express();
const PORT = process.env.PORT || 3000;
const DB =
  "mongodb+srv://abhijit:Machine@cluster0.qjp8guv.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRoute);

app.use(productRouter);

app.use(userRoute);

// CREATING AN API
// GET, PUT, POST, DELETE, UPDATE -> CRUD

// http://<youripaddress>/hello-world

// connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
