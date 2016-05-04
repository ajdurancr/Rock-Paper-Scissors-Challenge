var React = require('react'),
      ReactDOM = require('react-dom'),
      Tournament_solver = require('./Tournament_solver'),
      httpRequest = require('../services/httpConnection');


var Tournament = React.createClass({
	getInitialState: function(){
		return {}
	},
	
	onSolved: function (winner) {
		//do some stuff
	},

	componentDidMount: function(){
		ReactDOM.render(<Tournament_solver  onSolved={this.props.onSolved} />,
				  document.getElementById('tournamentContent')
				);
	},

	newTournament: function () {
		var label = 'Insert tournament here';
		ReactDOM.render(<Tournament_solver onSolved={this.onSolved}/>, document.getElementById('tournamentContent'));
	},

	render: function(){
		return (<div id='tournamentContent'> </div>);
	}
});

module.exports = Tournament;
