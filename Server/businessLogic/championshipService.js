var championshipRepo = require('../dataAccess/championshipRepo');

var sortTop = function(a, b){return b.points - a.points};

exports.saveNewRecord = function (players, callback) {
	//callback(res);
	championshipRepo.updateUserPoints({userId: players.first, points: 3}, function (res) {
		if(res.success){
			callback({status: 'success'});
		}else{
			callback({status: 'failure'});
		}
	});
}
//data.topN: number of records needed
//exports.getTopN = function (data, callback) {
exports.getTop = function (count, callback) {
	if (count <= 0) {
		callback({players: []});
		return;
	}
	championshipRepo.getUsers(count, function (res) {
		if (res.success) {
			var records = res.data;
			if (records.length == 0) {
				console.log('console.log({players: []}): no records found!');
				console.log({players: []});
				callback({players: []})
				return;
			}else{
				records.sort(sortTop);
				if (records.length > count) {
					records.splice(count - 1, records.length - count);
				}
				console.log('console.log({players: records});');
				console.log({players: records});
				callback({players: records})
				return;
			}
		} else {
			console.log('console.log({players: []}): failed to get users information');
			console.log({players: []});
			callback({players: []});
			return;
		}
	});
	
}

exports.solveChampionship = function (record, callback) {
	//callback(res);
	callback({success: true})
}
