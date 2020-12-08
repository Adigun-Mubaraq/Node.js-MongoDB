var MongoClient = require('mongodb');
const user = "mbq";
const pass = "mubaraq123";
const dbname = "animal_farm";


var url = `mongodb+srv://${user}:${pass}@cluster0.0mjoi.mongodb.net/${dbname}?retryWrites=true&w=majority`;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" }; // filtering the find method 
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 

// filtering with regular expression 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { address: /^S/ }; //outputs results with address that starts with "S"
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  }); 
