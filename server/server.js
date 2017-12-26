import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';

const app = express();
const dev = app.get('env') !== 'production';
app.use(bodyParser.json());
let dbUrl;  

if (!dev) {
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));

    dbUrl = 'mongodb://localhost/simpleblog';

    app.use(express.static(path.resolve('../', 'build')));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve('../', 'build', 'index.html'));
    })
}

if (dev) {
    app.use(morgan('dev'));
    dbUrl = 'mongodb://localhost/simpleblog';
}

function validate(data) {
    let errors = {};
    if (data.title === '') errors.title = "Can't be empty";
    if (data.cover === '') errors.cover = "Can't be empty";
    if (data.text === '') errors.title = "Can't be empty";
    const isValid = Object.keys(errors).length === 0;
    return { errors, isValid };
}


mongodb.MongoClient.connect(dbUrl, function(err, database) {
    const db = database.db('simpleblog');

    app.get('/api/posts', (req, res) => {
        db.collection('posts').find({}).toArray((err, posts) => {
            res.json({ posts });
        });
    });

    app.post('/api/posts', (req, res) => {
        const {errors, isValid} = validate(req.body);
        if (isValid) {
            const {title, cover, text, date, views} = req.body;
            db.collection('posts').insert({title, cover, text, date, views}, (err, result) => {
                if (err) {
                    res.status(500).json({errors: { global: "Something went wrong" }});
                } else {
                    res.json({post: result.ops[0]})
                }
            });
        } else {
            res.status(400).json({ errors });
        }
    });

    app.get('/api/posts/:_id', (req, res) => {
        db.collection('posts').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, post) => {
            res.json({ post });
        })
    });

    app.put('/api/posts/edit/:_id', (req, res) => {
        const { errors, isValid } = validate(req.body);
        if (isValid) {
            const { title, cover, text, date, views } = req.body;
            db.collection('posts').findOneAndUpdate(
                { _id: new mongodb.ObjectId(req.params._id) },
                { $set: { title, cover, text, date, views } },
                { returnOriginal: false},
                (err, result) => {
                    if (err) { res.status(500).json({errors: { global: err }}); return; };
                    res.json({ post: result.value });
                }
            )
        } else {
            res.status(400).json({ errors });
        }
    });

    app.delete('/api/posts/:_id', (req, res) => {
        db.collection('posts').deleteOne({_id: new mongodb.ObjectId(req.params._id) }, (err, r) => {
            if (err) { res.status(500).json({errors: { global: err }}); return; };
            res.json({});
        })
    })
     

    app.use((req, res) => {
        res.status(404).json({
            errors: {
                global: "Still working on it. Please, try again later when we implement it"
            }
        })
    })

    app.listen(process.env.PORT || 8081, () => console.log('Server is running on localhost:8081'));
})