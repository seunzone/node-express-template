import express from 'express';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';
import path from 'path';
import exphbs from 'express-handlebars';
import cors from 'cors';
import routes from './routes';


// Defining the Port Variable
const port = process.env.PORT || 5000;

// Set up the express app
const app = express();

app.use(cors());

// Log requests to the console.
app.use(volleyball);

// parse request body content
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// set view engine to Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our ejs files
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

// serves up static files from the public folder.
app.use(express.static(path.join(__dirname, 'public')));


// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(404).send({
  message: 'A beast ate this page, durh',
}));

app.listen(port);

export default app;
