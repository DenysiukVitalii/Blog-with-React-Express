'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var dev = app.get('env') !== 'production';
app.use(_bodyParser2.default.json());
var dbUrl = void 0;

if (!dev) {
    app.disable('x-powered-by');
    app.use((0, _compression2.default)());
    app.use((0, _morgan2.default)('common'));

    dbUrl = 'mongodb://localhost/simpleblog';

    app.use(_express2.default.static(_path2.default.resolve('../', 'build')));

    app.get('/', function (req, res) {
        res.sendFile(_path2.default.resolve('../', 'build', 'index.html'));
    });
}

if (dev) {
    app.use((0, _morgan2.default)('dev'));
    dbUrl = 'mongodb://localhost/simpleblog';
}

function validate(data) {
    var errors = {};
    if (data.title === '') errors.title = "Can't be empty";
    if (data.cover === '') errors.cover = "Can't be empty";
    if (data.text === '') errors.title = "Can't be empty";
    var isValid = Object.keys(errors).length === 0;
    return { errors: errors, isValid: isValid };
}

_mongodb2.default.MongoClient.connect(dbUrl, function (err, database) {
    var db = database.db('simpleblog');

    app.get('/api/posts', function (req, res) {
        db.collection('posts').find({}).toArray(function (err, posts) {
            res.json({ posts: posts });
        });
    });

    app.post('/api/posts', function (req, res) {
        var _validate = validate(req.body),
            errors = _validate.errors,
            isValid = _validate.isValid;

        if (isValid) {
            var _req$body = req.body,
                title = _req$body.title,
                cover = _req$body.cover,
                text = _req$body.text,
                date = _req$body.date,
                views = _req$body.views;

            db.collection('posts').insert({ title: title, cover: cover, text: text, date: date, views: views }, function (err, result) {
                if (err) {
                    res.status(500).json({ errors: { global: "Something went wrong" } });
                } else {
                    res.json({ post: result.ops[0] });
                }
            });
        } else {
            res.status(400).json({ errors: errors });
        }
    });

    app.get('/api/posts/:_id', function (req, res) {
        db.collection('posts').findOne({ _id: new _mongodb2.default.ObjectId(req.params._id) }, function (err, post) {
            res.json({ post: post });
        });
    });

    app.put('/api/posts/edit/:_id', function (req, res) {
        var _validate2 = validate(req.body),
            errors = _validate2.errors,
            isValid = _validate2.isValid;

        if (isValid) {
            var _req$body2 = req.body,
                title = _req$body2.title,
                cover = _req$body2.cover,
                text = _req$body2.text,
                date = _req$body2.date,
                views = _req$body2.views;

            db.collection('posts').findOneAndUpdate({ _id: new _mongodb2.default.ObjectId(req.params._id) }, { $set: { title: title, cover: cover, text: text, date: date, views: views } }, { returnOriginal: false }, function (err, result) {
                if (err) {
                    res.status(500).json({ errors: { global: err } });return;
                };
                res.json({ post: result.value });
            });
        } else {
            res.status(400).json({ errors: errors });
        }
    });

    app.delete('/api/posts/:_id', function (req, res) {
        db.collection('posts').deleteOne({ _id: new _mongodb2.default.ObjectId(req.params._id) }, function (err, r) {
            if (err) {
                res.status(500).json({ errors: { global: err } });return;
            };
            res.json({});
        });
    });

    app.use(function (req, res) {
        res.status(404).json({
            errors: {
                global: "Still working on it. Please, try again later when we implement it"
            }
        });
    });

    app.listen(process.env.PORT || 8081, function () {
        return console.log('Server is running on localhost:8081');
    });
});