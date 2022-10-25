const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const cors = require('cors');
const catagories = require('./data/catagories.json');

app.use(cors())

app.get('/', (req, res)=>{
   res.send('my first and first server is running')
})

app.get('/catagories', (req, res) =>{
   res.send(catagories)
})

app.listen(port, ()=>{
   console.log(`the server is running at port: ${port}`)
})