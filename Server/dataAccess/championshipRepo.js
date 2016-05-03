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
	/*callback({
			success: true,
			data: [
				{user: "User1", points: 14},
				{user: "User2", points: 15},
				{user: "User3", points: 64},
				{user: "User4", points: 1},
				{user: "User5", points: 3},
				{user: "User6", points: 554},
				{user: "User7", points: 22},
				{user: "User8", points: 67},
				{user: "User9", points: 12},
				{user: "User10", points: 8},
				{user: "User11", points: 234},
				{user: "User12", points: 445},
				{user: "User13", points: 4},
				{user: "User14", points: 3}
			]
		}
	);	*/
};

exports.updateUserPoints = function(params, callback){
    console.log('updateUserPoints: console.log(params);')
    console.log(params);
	var queryParams = {
		query: { "_id": params.userId },
      		updateQuery: { $inc: { "points": params.points } },
		collection: 'users'
	};

	dbConnection.updateOneDocument(queryParams, function(res) {
		callback(res);
	});

	
};