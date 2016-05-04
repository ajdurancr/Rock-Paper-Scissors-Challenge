var React = require('react'),
      ReactDOM = require('react-dom'),
      Choice= require('./Choice'),
      Play_message= require('./Play_message'),
      Play_players= require('./Play_players');

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
		var username = 'defaultWinnerUser';
		var tittle = 'Winner';
		var message = 'Congrats '.concat(username,' you have won!.');
		var button_label = 'New game';
		this.showMessage(tittle, message, button_label, this.getPlayersInfo);
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
