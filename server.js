const express = require('express');
const path = require('path');
const morgan = require('morgan');
const config = require('./config');
const cors = require('cors');
const postRouter = require('./app/routes');

var app = express();

app.use(cors());

require('./app/routes')(app);


app.use(morgan('dev'));

app.use('/posts', postRouter);

app.use(express.static('./build'));

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(config.get('port'), config.get('hostname'), function () {
   console.log(`Server running at http://${config.get('hostname')}:${config.get('port')}/`);
});
