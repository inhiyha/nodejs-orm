var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;

var bookSchema = mongoose.Schema({
    // name:String,
    author:String
});

var book = mongoose.model("books",bookSchema);
book.find( (err,data) => console.log(data));
book.find(function(err, resp){
    // console.log(err);
    console.log(resp);
    db.close();
})

