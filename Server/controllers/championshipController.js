var campionshipService = require('../businessLogic/championshipService');

exports.newRecord = function(cRequest, cResponse) {
  campionshipService.saveNewRecord(cRequest.body.players, function(res){
        cResponse.send(res);
    });
};
campionshipService.saveNewRecord({first: 'tonny2'}, function(res){
        console.log('call campionshipService.saveNewRecord: console.log(res);');
        console.log(res);
    });

exports.getTop = function(cRequest, cResponse) {
  //campionshipService.getTop(cRequest.params.count, function(res){
  campionshipService.getTop(12, function(res){
        cResponse.send(res);
    });
};

exports.newChampionship = function(cRequest, cResponse) {
  campionshipService.saveNewRecord(cRequest.body, function(res){
        cResponse.send(res);
    });
};