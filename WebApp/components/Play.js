var React = require('react'),
      Choice= require('./Choice');
var Play = React.createClass({
	getInitialState: function(){
		return {
			players: {
				first: this.props.players.first, 
				second: this.props.players.second
			},
			currentPlayer: this.props.players.first[0]
			}
	},

	onClick: function(choice){
		if (this.state.currentPlayer == this.state.players.first[0]) {
			this.state.players.first[1] = choice;
			this.setState({
				currentPlayer: this.state.players.second[0]
			});
		} else {
			this.state.players.second[1] = choice;
			console.log('peticion http')
		}
		console.log(this.state.players);
	},

	render: function(){
		return (<Choice username = {this.state.currentPlayer} onClick = {this.onClick}/>);
	}
});

module.exports = Play;
