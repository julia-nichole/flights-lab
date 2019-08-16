var mongoose = require('mongoose');
var db = mongoose.connection;


mongoose.connect('mongoose://localhost/flights',
{useNewUrlParser:true,useCreateIndex:true}
);

db.on('connected', function(){
console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});