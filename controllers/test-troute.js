import express from "express";
import mongoose from 'mongoose';
import router from "../SOCIAL MEDIA API APP/routes/user-routes";

const app = express();
const port = 5000;

app.use("/api/user", router);

mongoose.connect('mongodb+srv://rakeshroshanp27:uXQGLRHqg5H1O4pd@cluster0.6diypym.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0').then(app.listen(port)).then(() => console.log(`Hence running successfully and runs on the port http://localhost:${port}`)).catch((err) => console.log(err));