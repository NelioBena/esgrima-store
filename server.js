const express = require("express");
const path = require("path");
const app = express();

// Agregar el encabezado X-Content-Type-Options: nosniff
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

// Servir la aplicación Angular desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, "dist/esgrima-store")));

// Ruta para manejar el acceso a la aplicación
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/esgrima-store/index.html"));
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
