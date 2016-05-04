var fs = require('fs'); 
var MongoClient = require('mongodb').MongoClient;

var readJsonFile = function() {
    //read database configuration from JSON file
    var connectionParams = fs.readFileSync("./dbConfiguration.json");
    var dbConfig = {};

    try {
        //parse file content
        dbConfig = JSON.parse(connectionParams);
    } 
    catch (err) {
        console.log(err);
    }
    return dbConfig;
};

exports.findDocuments = function(params, callback) {
    var dbUrl = '';
    var dbConfig = readJsonFile();
    // connection URL
    dbUrl = dbUrl.concat(dbConfig.params.protocol, '://', dbConfig.params.host , ':',  dbConfig.params.port,  '/' , dbConfig.params.database);
    // open database connection
    MongoClient.connect(dbUrl, function(err, db){
        if (err){ //connection error
            callback({
                success: false,
                data: null,
                message: 400
            });
            return;
        }

        //get collection
          var collection = db.collection(params.collection);
          // get all documents in the collection
          collection.find(params.query).toArray(function(err, docs) {
            var res;
                if (err){ //connection error
                    res = { 
                        success: false,
                        data: null,
                        message: 400
                    };
                }
                else{ //success
                     if (docs.length > 0) {
                        res = {
                            success: true,
                            data: docs,
                            message: 200
                        };    
                    }else{ //no records found
                        res = {
                            success: true,
                            data: [],
                            message: 200
                        };
                    }
                }
                db.close(); 
                callback(res);
          }); 
    });
};


exports.insertOneDocument = function(params, callback) {
    var dbUrl = '';
    var dbConfig = readJsonFile();
    // connection URL
    dbUrl = dbUrl.concat(dbConfig.params.protocol, '://', dbConfig.params.host , ':',  dbConfig.params.port,  '/' , dbConfig.params.database);

    // open database connection
    MongoClient.connect(dbUrl, function(err, db){
        if (err){ //connection error
            callback({
                success: false,
                data: null,
                message: 400
            });
            return;
        }

       //get collection
          var collection = db.collection(params.collection);
          // Insert a document
          collection.insert(params.query, function(err, result) {
            var res;
                if (err){ //connection error
                    res = {
                        success: false,
                        data: null,
                        message: 400
                    };
                }
                else{ // success
                    res = {
                        success: true,
                        data: null,
                        message: 200
                    };
                }
                db.close(); 
                callback(res);
          }); 
    });
};

exports.insertDocuments = function(params, callback) {
    var dbUrl = '';
    var dbConfig = readJsonFile();
    // connection URL
    dbUrl = dbUrl.concat(dbConfig.params.protocol, '://', dbConfig.params.host , ':',  dbConfig.params.port,  '/' , dbConfig.params.database);

    // open database connection
    MongoClient.connect(dbUrl, function(err, db){
        if (err){ //connection error
            callback({
                success: false,
                data: null,
                message: 400
            });
            return;
        }

       //get collection
          var collection = db.collection(params.collection);
          // documents to be inserted
          collection.insertMany(params.documents, function(err, result) {
            var res;
                if (err){ //connection error
                    res = {
                        success: false,
                        data: null,
                        message: 400
                    };
                }
                // in case any documenta could not be inserted
                else if (result.result.n != params.documents.length || result.ops.length != params.documents.length){
                    res = {
                        success: false,
                        data: null,
                        message: 400
                    };
                }else{  // success
                    res = {
                        success: true,
                        data: null,
                        message: 200
                    };
                }
                db.close(); 
                callback(res);
          }); 
    });
};

exports.updateOneDocument = function(params, callback) {
    var dbUrl = '';
    var dbConfig = readJsonFile();
    // connection URL
    dbUrl = dbUrl.concat(dbConfig.params.protocol, '://', dbConfig.params.host , ':',  dbConfig.params.port,  '/' , dbConfig.params.database);

    // open database connection
    MongoClient.connect(dbUrl, function(err, db){
        if (err){ //connection error
            callback({
                success: false,
                data: null,
                message: 400
            });
            return;
        }

       //get collection
          var collection = db.collection(params.collection);
          // update document
          collection.updateOne(params.query, params.updateQuery, {upsert: true}, function(err, result) {
            var res;
                if (err){ //connection error
                    res = {
                        success: false,
                        data: null,
                        message: 400
                    };
                }
                else{ // success
                    res = {
                        success: true,
                        data: null,
                        message: 200
                    };
                }
                db.close(); 
                callback(res);
          }); 
    });
};

exports.deleteOneDocument = function(params, callback) {
    var dbUrl = '';
    var dbConfig = readJsonFile();
    // connection URL
    dbUrl = dbUrl.concat(dbConfig.params.protocol, '://', dbConfig.params.host , ':',  dbConfig.params.port,  '/' , dbConfig.params.database);

    // open database connection
    MongoClient.connect(dbUrl, function(err, db){
        if (err){ //connection error
            callback({
                success: false,
                data: null,
                message: 400
            });
            return;
        }

       //get collection
          var collection = db.collection(params.collection);
          // detele a document
          collection.deleteOne(params.query, function(err, result) {
            var res;
                if (err){ //connection error
                    res = {
                        success: false,
                        data: null,
                        message: 400
                    };
                }
                else{ // success
                    res = {
                        success: true,
                        data: null,
                        message: 200
                    };
                }
                db.close(); 
                callback(res);
          }); 
    });
};

exports.deleteDocuments = function(params, callback) {
    var dbUrl = '';
    var dbConfig = readJsonFile();
    // connection URL
    dbUrl = dbUrl.concat(dbConfig.params.protocol, '://', dbConfig.params.host , ':',  dbConfig.params.port,  '/' , dbConfig.params.database);

    // open database connection
    MongoClient.connect(dbUrl, function(err, db){
        if (err){ //connection error
            callback({
                success: false,
                data: null,
                message: 400
            });
            return;
        }

       //get collection
          var collection = db.collection(params.collection);
          // find the documents
          collection.remove(params.query, function(err, result) {
            var res;
                if (err){ //connection error
                    res = {
                        success: false,
                        data: null,
                        message: 400
                    };
                }
                else{ // success
                    res = {
                        success: true,
                        data: null,
                        message: 200
                    };
                }
                db.close(); 
                callback(res);
          }); 
    });
};