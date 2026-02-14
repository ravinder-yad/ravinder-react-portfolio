const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database
connectDB();

// Routes
// Vercel serverless functions handle routing implicitly via file structure, 
// BUT for a monolithic Express app on Vercel, we export the app.
// We need to mount the routes exactly as they were.

app.use("/api", require("./routes/homerouter"));
app.use("/api", require("./routes/aboutroutes"));
app.use("/api", require("./routes/serviceRoutes"));
app.use("/api", require("./routes/skillRoutes"));
app.use("/api", require("./routes/resumeRoutes"));
app.use("/api", require("./routes/projectRoutes"));
app.use("/api", require("./routes/certificateRoutes"));
app.use("/api", require("./routes/contactroutes"));

app.get("/", (req, res) => res.send("Express on Vercel"));

module.exports = app;
