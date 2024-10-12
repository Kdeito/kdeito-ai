const express = require("express");
const app = express();

app.use(express.json());

app.post("/chat", (req, res) => {
    const userMessage = req.body.message.toLowerCase(); // Obtener mensaje en minúsculas

    let responseMessage;

    if (userMessage.includes("hola")) {
        responseMessage = "¡Hola! ¿Cómo puedo ayudarte hoy?";
    } else if (userMessage.includes("cómo estás")) {
        responseMessage = "Estoy bien, gracias. ¿Y tú?";
    } else if (userMessage.includes("adiós")) {
        responseMessage = "¡Hasta luego! Que tengas un buen día.";
    } else {
        responseMessage = "Lo siento, no entiendo esa pregunta. Pero estoy aquí para ayudar.";
    }

    res.json({ response: responseMessage }); // Devuelve la respuesta
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
