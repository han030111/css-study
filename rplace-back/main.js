const express = require("express");
const a = [];
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3001');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(a);
});

app.post("/", (req, res) => {

        a.push(req.body);
        a.send(req.body)

});

app.listen(port, () => {
    console.log(1);
});