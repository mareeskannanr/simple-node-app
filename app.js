let express = require("express");
let app = express();
let ejs = require('ejs');
let logger = require('morgan');

let routes = require('./routes'); 

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.enable('trust proxy');

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.set('views', __dirname + '/public/views');
app.use(express.static(__dirname + "/public"));

//app.use('/', (req, res) => res.render('index.html'));
app.use(routes);

app.listen(3000, () => console.log('Application is running on port 3000'));