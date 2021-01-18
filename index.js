//require
const express = require('express')
var cors = require("cors");
var mongoose = require('mongoose')
// goi bien
const app = express();
const option = {
	socketTimeoutMS: 30000,
	keepAlive: true,
	reconnectTries: 30000,
	useNewUrlParser: true,
	useUnifiedTopology: true
};
const bookRouter = require('./router/book_router.js')
//conect mongooes
mongoose.connect("mongodb+srv://ShopBook:khoild11@realmcluster.ycs82.mongodb.net/shopBook?retryWrites=true&w=majority",option)
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
});
//here we are configuring dist to serve app files
//app.use
app.use(cors());
// this * route is to serve project on different page routes except root `/`
app.get('/',function(req,res){
	res.send('khoi oi la khoi')
});
app.use('/book',bookRouter)
const port = process.env.PORT || 14;
app.listen(port);
console.log(`app is listening on port: ${port}`);