const express = require('express');
var cors = require('cors');
let data = require('./data');
const app = express();
const port = 3001;

// middlewars
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extender:true}))

app.get('/quizzes', function(request, response) {
    request.json(data.quizzes);
})

app.get('/quiz/id', function(request, response) {

})

app.post('/score', function(request, response) {

})