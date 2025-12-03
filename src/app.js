const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require('./routes/auth.routes');
const appointmentsRoutes = require("./routes/appointments.routes");
const clientsRoutes = require("./routes/clients.routes");
const servicesRoutes = require("./routes/services.routes");
const schedulesRoutes = require("./routes/schedules.routes");

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/schedules', schedulesRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "API OK" });
});

app.get("/", (req, res) => {
    res.json({ status: 200, message: `🚀 API funcionando en http://localhost:${PORT}` })
})

module.exports = app;
