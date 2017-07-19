var mongodb = require('mongodb');

var url="mongodb://127.0.0.1:27017/stu"; 
function getDb(callback){
	mongodb.MongoClient.connect(url,function(err,db){
		if(err){console.log(err);return};
		callback(db);
	})
}

module.exports = getDb