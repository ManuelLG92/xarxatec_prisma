"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const expressHandlebars = require('express-handlebars');
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.set('views', path_1.default.join(__dirname, 'views'));
const hbs = expressHandlebars.create({ extname: '.hbs',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    defaultLayout: "main", });
app.engine('.hbs', hbs.engine);
app.set('view cache', true);
app.set('view engine', '.hbs');
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use("/", routes_1.default);
app.listen(3000, () => {
    console.log('App escuchando el puerto 3000...');
});
