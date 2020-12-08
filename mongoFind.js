var MongoClient = require('mongodb');
const user = "mbq";
const pass = "mubaraq123";
const dbname = "animal_farm";


var url = `mongodb+srv://${user}:${pass}@cluster0.0mjoi.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// finding One Document from the database
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// }); 



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 