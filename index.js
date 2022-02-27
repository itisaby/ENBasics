const express = require('express');
const app = express();
const port = 8080;
app.use('/static',express.static('public'))
app.set('view engine', 'ejs');
app.set('views', './public/views')



// console.log(app)

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// }) 

// app.get('/users/:Id?', (req, res) => {
//     console.log(req.params)
//     if(req.params.id === undefined){
//         res.send("All users accessed");
//     }
//     else{
//         res.send("users data "+ req.params.Id);
//     }
// })

// app.get('/flights/:from-:To', (req, res) => {
//     console.log(req.params)
//     res.send("search for flights :" + " from " + req.params.from + " to " + req.params.To)
// })

// app.post('/users/profile', (req, res) => {
//     res.send("users data profile");
// })
// const Validator = (req, res, next) => {
//     if(req.params.username === 'aby'){
//         console.log('Middleware for '+req.params.username+' is working');
//     }
//     else{
//         console.log('not authorized user')
//     }
//     next();
// }

// app.get('/', (req, res) => {
//     res.send("Hi!!!!")
// })
// app.get('/users/:username', Validator, (req, res) => {
//     res.send("Hi User!!!!")
// })

// app.use(Validator);



app.listen(port, ()=>{
    console.log("server running on port 8080");
});
