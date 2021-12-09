import express from 'express';
import { Main, getAllPosts } from '../services';
const router = express.Router();
//const controlador = require("../build/controlador.js");

router.get("/", async (req, res, next)=>{
    res.redirect('/indice.html')
    //await Main();
    //res.sendFile(path.join(__dirname, '..', 'public', 'indice.html'));
})

//router.get("/usuarios", controlador.datosUsuarios);

router.get("/test", async (request, response) => {
    const posts = await getAllPosts();
    response.render("test", { hello: "Hello Manuel", posts})
});

//router.post("/alta", controlador.insertaUsuario);

export default router;
//module.exports = router;
