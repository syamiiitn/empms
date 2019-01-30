const exp=require('express');
const http=require('http');
const path=require('path');
const bodyParser=require('body-parser');
//GET Our API Routes
const api=require('./server/route/api');
const app=exp();
//Parsers for post Data
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
//Point Static path to Dist
app.use(exp.static(path.join(__dirname,'dist/meanproject')));
//set our api routes
app.use('/api',api);
//Catch all other routes and return it to index.html
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/meanproject/index.html'));
});
//Get port from environment and store in express
const port=process.env.PORT || '4001';
app.set('port','port');
//listen on provided port on all network interface
app.listen(port,()=>{
    console.log('API running on localhost:${port}'+port);  
})
// var jwtBearerToken=jwt.sign({name:req.body.name},s,{expiresIn:60});
// console.log('token is'+jwtBearerToken);
// res.status(200).json({
//     idToken:jwtBearerToken
// });
