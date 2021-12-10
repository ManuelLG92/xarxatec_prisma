import express from 'express';
import path from 'path';
const expressHandlebars = require('express-handlebars');
import router from "./routes/routes";
const methodOverride = require('method-override');
const app:express.Application = express();

app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs', expressHandlebars.create({  
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    //partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: "main",
    }).engine);

app.set('view cache', true);
app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(express.static(path.join( __dirname, 'public')));

app.use("/", router);

app.listen(3000, (): void=>{
    console.log('App escuchando el puerto 3000...')
})
