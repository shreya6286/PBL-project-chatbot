var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/handler.js'));

var config = require ("dotenv").config()
var {Configuration, OpenAIApi} = require("openai")
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

console.log(process.env.API_KEY)

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));

app.post('/server_api', function (req, res) {
    openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{
            role: 'user',
            content: req.body.request_data
        }]
    }).then(vres => {
        res.send(vres.data.choices)
    })
    
    console.log(req.body);
})

app.get('/ping', function (req, res) {
    res.send('pong')
})

app.listen(4500)
console.log('Server started on port 4500');
