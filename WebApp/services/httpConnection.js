axios = require('axios');

var httpRequest = {
	makeRequest: function (configs, callback) {
		axios(configs).then(function (response) {
			console.log(response.data);
			callback(response.data);
		  })
		  .catch(function (response) {
		    	callback(response);
		  });
	}
};

module.exports = httpRequest;