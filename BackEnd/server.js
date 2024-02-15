import express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

// app.get("/",(req,res) => {
//     //root route http://localhost:5000
//     res.send("Hello Nirmitha");
// });


app.use(express.json()); //to parse the incoming request with JSON paylodes (from req.body)
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});