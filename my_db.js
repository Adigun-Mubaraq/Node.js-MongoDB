var MongoClient = require('mongodb');
const user = "mbq";
const pass = "mubaraq123";
const dbname = "animal_farm";


var url = `mongodb+srv://${user}:${pass}@cluster0.0mjoi.mongodb.net/${dbname}?retryWrites=true&w=majority`;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});