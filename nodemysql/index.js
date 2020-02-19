const conn = require('./models/utils/connect');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

conn.connect(function(err){
    if(err)  return  console.log(err);
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);



