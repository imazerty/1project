var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Books');
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var port =  3000;
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our library' });
});
app.use('/library', router);
app.listen(port);
console.log('Magic happens on port 3000' );
