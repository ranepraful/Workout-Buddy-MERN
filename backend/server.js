const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workout");
const userRoutes = require('./routes/user')
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/workouts", workoutRoutes);
app.use('/api/user', userRoutes)
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db listening on port 4000 !");
    });
  })
  .catch((err) => {
    console.log(err);
  });
