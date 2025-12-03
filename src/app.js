const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const appointmentsRoutes = require("./routes/appointments.routes");

app.use("/appointments", appointmentsRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "API OK" });
});

module.exports = app;
