const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectdb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectdb();
const app = express();

const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));


// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
