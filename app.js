const express =  require('express');
const sqlite3 = require('sqlite3').verbose();
const session = require('express-session');
const app = express();
const port = 7200;
const servname = "dupaServer";

app.use(express.urlencoded({
    extended: true
}));

app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: "lofhl4312967qukads",
        cookie: { secure: false }
    }
));

app.set('view engine', 'pug');
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.static(__dirname));
let db = new sqlite3.Database('database.db', (err) =>{
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {

});

app.get('/game', (req, res) => {

});

app.post('/uploadMap', (req, res) => {
    let data;
    console.log(req.body);
    console.log('\n');
    console.log(Object.keys(req.body));
    console.log('\n');
    try {data = Object.keys(req.body)[0];}
    catch{}
    console.log(data);

    let reqObj = JSON.parse(data);
    console.log("POST /uploadScenario/ -> uploading scenario", console.log(typeof reqObj));

    console.log(reqObj['name'], reqObj['description'], servname, reqObj['fileData']);
    /*let stmt = db.prepare('INSERT INTO maps (name, desc, servname, obj) values (?, ?, ?, ?);');
    stmt.run(reqObj['name'], reqObj['description'], servname, reqObj['fileData']);*/

    res.json("Hello, there");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});