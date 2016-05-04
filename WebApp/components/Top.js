
var React = require('react'),
      TopItem = require('./TopItem'),
      httpRequest = require('../services/httpConnection');

var TopItem = React.createClass({
  
  getTopItems: function (n) {
    var self = this;
    httpRequest.makeRequest({
            method: 'get',
            url: '/api/championship/top/' + n
          },
          function (data) {
            self.state.topItems = data
          });
  },

  getInitialState: function() {
    this.getTopItems(10);
    return({
        topItems: []
    });
  },

  render: function(){
           var self = this;
  	     var playerNames = this.state.topItems.map(function (playerName) {
                var itemId = self.state.topItems.indexOf(playerName);
  		    return (<TopItem key={itemId} text = {playerName} itemId ={itemId} />)
  	     });
	return(
		<ul className="collection ">
		 	{playerNames}
		</ul>
	);
  }

});

module.exports = TopItem;
