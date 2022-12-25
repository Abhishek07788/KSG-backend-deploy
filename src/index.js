const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const UserRouter = require("./Routes/user.routes");
const courseRouter = require("./Routes/course.routes");

dotenv.config();
let PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);
app.use("/course", courseRouter);

app.use("/", (req, res) => {
  res.send("Hello KGS This the backend");
});

app.listen(PORT || 8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
