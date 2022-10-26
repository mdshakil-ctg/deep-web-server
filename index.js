const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const catagories = require('./data/catagories.json');
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res)=>{
   res.send('my first and first server is running')
})

app.get('/catagories', (req, res) =>{
   res.send(catagories)
})

app.get('/courses', (req, res) =>{
   res.send(courses)
})

app.get('/:id', (req, res)=>{
   const id = (req.params.id)
   const data = courses.find(course=> course.course_id == id);
   res.send(data);
})

app.listen(port, ()=>{
   console.log(`the server is running at port: ${port}`)
})