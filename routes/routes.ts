import express from 'express';
import path from 'path';
import { Main } from '../services/database';
const router = express.Router();
//const controlador = require("../build/controlador.js");

router.get("/", async (req, res)=>{
    console.log('entra');
    await Main();
    res.sendFile(path.join(__dirname, '..', 'public', 'indice.html'));
})

//router.get("/usuarios", controlador.datosUsuarios);

router.get("/test", (request, response) => {
    console.log('entra')
    response.render("test", { hello : "Hello Manuel"})
});

//router.post("/alta", controlador.insertaUsuario);

export default router;
//module.exports = router;
