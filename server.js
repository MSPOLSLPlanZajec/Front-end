var express = require('express');
var app = express();
var PORT = 3000;

// static - all our js, css, images, etc go into the assets path
app.use('/', express.static(__dirname + '/dist', { dotfiles: 'allow' }));
app.use('/assets', express.static(__dirname + '/dist/assets'));

//If we get here then the request for a static file is invalid so we may as well stop here
app.use('/assets', function (req, res, next) {
    res.sendStatus(404);
});

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT);
console.log('Server listening at port ' + PORT);