const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const appointmentsRoutes = require("./routes/appointments.routes");

app.use("/", (req, res) => {
    res.json({ status: 200, message: "Api corriendo correctamente en el puerto: 3000" })
})

app.use("/api/appointments", appointmentsRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "API OK" });
});


module.exports = app;
