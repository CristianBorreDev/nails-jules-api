const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
connectDB();

app.listen(PORT, () => {
  console.log(`🚀 API funcionando en http://localhost:${PORT}`);
});
