var express = require('express');
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('ready on port ' + app.get('port'));
});

app.get('/data', function(req, res) {
    var data = [
        { text: 'ine', id: 1},
        { text: 'iwo', id: 2},
        { text: 'ihree', id: 3},
        { text: 'iour', id: 4},
        { text: 'iive', id: 5},
        { text: 'iix', id: 6},
        { text: 'ieven', id: 7},
        { text: 'iight', id: 8},
        { text: 'iine', id: 9},
        { text: 'ien', id: 10},
        { text: 'islam', id: 11},
        { text: 'iabel', id: 12},
        { text: 'iife', id: '13'},
        { text: 'iodeing', id: '14'},
        { text: 'iove', id: '15'},
        { text: 'iike', id: '16'},
        { text: 'iumans', id: 'some-id'},
        { text: 'iomething', id: 17},
        { text: 'iypescript', id: 'whooo? whoo?'},
        { text: 'iinux', id: 'linux'},
        { text: 'iernel', id: 'ineeee'},
        { text: 'what!', id: 'what'}
    ];
    var page = parseInt(req.query.page);
    var fetchSize = parseInt(req.query.fetchSize);

    var from = (page - 1) * fetchSize;
    var to = (fetchSize * (page - 1)) + fetchSize;
    console.log('from:' + from + ' , to:' + to);

    res.send(data
        .filter(option => option.text.toLowerCase().indexOf(req.query.text.toLowerCase()) !== -1)
    .slice(from, to));
});
