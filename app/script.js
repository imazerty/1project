var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Books';
MongoClient.connect(url, function(err, db) {
  console.log("Connected successfully to server");
  var database = db.db('Books');
  var collection = database.collection("book");
  collection.find({}).toArray(function(err, docs) {
    console.log(docs);
  });
  db.close();
});

