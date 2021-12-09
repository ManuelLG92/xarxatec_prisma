import express from 'express';
import path from 'path';

const expressHandlebars = require('express-handlebars');
import router from "./routes/routes";

const app:express.Application = express();


app.set('views', path.join(__dirname, 'views'))

const hbs = expressHandlebars.create({extname: '.hbs',
layoutsDir: path.join(app.get('views'), 'layouts'),
partialsDir: path.join(app.get('views'), 'partials'),
defaultLayout: "main",});

app.engine('.hbs', hbs.engine);


app.set('view cache', true);
app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join( __dirname, 'public')));

app.use("/", router);

app.listen(3000, (): void=>{
    console.log('App escuchando el puerto 3000...')
})