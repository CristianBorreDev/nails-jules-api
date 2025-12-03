const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const appointmentsRoutes = require("./routes/appointments.routes");

app.use("/", (req, res) => {
    res.json({ status: 200, message: `🚀 API funcionando en http://localhost:${PORT}` })
})

app.use("/api/appointments", appointmentsRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "API OK" });
});


module.exports = app;
