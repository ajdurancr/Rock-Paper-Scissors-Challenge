var React = require('react'),
      ReactDOM = require('react-dom'),
      Choice= require('./Choice'),
      Play_message= require('./Play_message'),
      Play_players= require('./Play_players'),
      httpRequest = require('../services/httpConnection');

var players = {
		first: ["Player1", ""],
		second: ["Player2", ""]
	},
	currentPlayer= "Player1";

var Play = React.createClass({
	getInitialState: function(){
		return {
			players:{
				first: ["Player1", ""],
				second: ["Player2", ""]
			},
			currentPlayer : "Player1"
			}
	},

	showOptions: function() {
		ReactDOM.render(<Choice username = {currentPlayer} onClick = {this.onChoose}/>, document.getElementById('playContent'));
	},

	showMessage: function(tittle, message, button_label, onClickMethod) {
		ReactDOM.render(<Play_message tittle = {tittle} message={message} button_label = {button_label} onClick={onClickMethod}/> , document.getElementById('playContent'));
	},

	solveMatch: function () {
		var self = this;
		httpRequest.makeRequest({
					  method: 'post',
					  url: '/api/championship/new',
					  data: [players.first, players.second]
					},
					function (data) {
						var username = data.winner[0],
						tittle = 'Winner',
						choice;
						if (data.winner[1] == 'P'){
							choice = 'Paper';
						}else if (data.winner[1] == 'S'){
							choice = 'Scissors';
						}else{
							choice = 'Rock';
						}

						var message = 'Congrats '.concat(username,' you have won since you use ', choice ,'!.'),
						button_label = 'New game';
						self.showMessage(tittle, message, button_label, self.getPlayersInfo);
					});
		
	},

	showAdvise: function () {
		var tittle = currentPlayer + "\'s turn";
		var message = "Advise: Make sure your opponent can't see your choice.";
		var button_label = 'Play';
		this.showMessage(tittle, message, button_label, this.showOptions);
	},

	getPlayersInfo: function() {
		ReactDOM.render(<Play_players onClick={this.savePlayersInfo}/> , document.getElementById('playContent'));
	},

	savePlayersInfo: function(player1, player2) {
		players = {
				first: [player1, ""],
				second: [player2, ""]
			};
		currentPlayer = players.first[0];
		this.showAdvise();
		

	},

	onChoose: function(choice){
		var tittle, message, button_label;
		if (currentPlayer == players.first[0]) {
			players.first[1] = choice;
			currentPlayer = players.second[0]
			this.showAdvise();
		} else {
			players.second[1] = choice;
			currentPlayer = players.first[0];
			this.solveMatch();
		}
		console.log(players);
		
	},

	componentDidMount: function () {
		this.getPlayersInfo(this.savePlayersInfo);
	},

	render: function(){
		return (<div id='playContent'> </div>);
	}
});

module.exports = Play;
