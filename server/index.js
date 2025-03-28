const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./db/connectDB");

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

//middleware

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true

}));

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(bodyParser.json());

//routes




app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
