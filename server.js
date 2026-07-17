import express from "express";

const app = express();

app.use(express.static("."));

app.get("/api/hola", (req, res) => {
    res.json({
        mensaje: "Hola desde el servidor"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});