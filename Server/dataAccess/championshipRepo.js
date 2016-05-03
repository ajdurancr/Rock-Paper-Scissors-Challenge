var dbConnection = require('./connection');

exports.getUsers = function(params, callback){
	var queryParams = {
		query: {},
		collection: 'users'
	};
	dbConnection.findDocuments(
		queryParams, 
		function (res) {
			callback(res);
		}
	);
};

exports.updateUserPoints = function(params, callback){
	var queryParams = {
		query: { "_id": params.userId },
      		updateQuery: { $inc: { "points": params.points } },
		collection: 'users'
	};

	dbConnection.updateOneDocument(queryParams, function(res) {
		callback(res);
	});

	
};