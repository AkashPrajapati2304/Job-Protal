import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user_route.js";
import companyRoute from "./routes/company_route.js";
import jobRoute from "./routes/job_route.js";
import applicationRoute from "./routes/application_route.js"


dotenv.config({});

const app = express();

 
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: 'https://job-protal-n8r2.vercel.app/',
    credentials:true
}
app.use(cors(corsOptions));

 
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running on this ${PORT} port`);
})