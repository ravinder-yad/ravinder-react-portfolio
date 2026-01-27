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
app.use("/api", require("./routes/homerouter"));
app.use("/api", require("./routes/aboutroutes"));
app.use("/api", require("./routes/serviceRoutes"));
app.use("/api", require("./routes/skillRoutes"));
app.use("/api", require("./routes/resumeRoutes"));
app.use("/api", require("./routes/projectRoutes"));
app.use("/api", require("./routes/certificateRoutes"));
app.use("/api", require("./routes/contactroutes"));








// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
